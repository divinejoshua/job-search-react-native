import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  StatusBar,
  Share,
  Alert
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hooks/useFetch";

// Constant variables 
const tabs : string[]= ["About", "Qualifications", "Responsibilities"];


export default function JobDetails() {
    
    const params = useLocalSearchParams();
    const router = useRouter();
  
    // Use fetch hook
    const { data, isLoading, error, refetch } = useFetch("job-details", {
      job_id: params.id,
    });
  
    // Data 
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [refreshing, setRefreshing] = useState(false);
  
    // Refresh funtion 
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      refetch()
      setRefreshing(false)
    }, []);


    // Content to display in tab 
    const displayTabContent = () => {
        switch (activeTab) {
          case "Qualifications":
            return (
              <Specifics
                title='Qualifications'
                points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
              />
            );
    
          case "About":
            return (
              <JobAbout info={data[0].job_description ?? "No data provided"} />
            );
    
          case "Responsibilities":
            return (
              <Specifics
                title='Responsibilities'
                points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
              />
            );
    
          default:
            return null;
        }
    }

    // On share 
    const onShare = async () => {
      try {
        const result = await Share.share({
          // This is the message that will be shared. This could be link 
          message:
            'Happy to share something with you.',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error: any) {
        Alert.alert(error.message);
      }

    }

  return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

            {/* Stack screen settings  */}
            <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                // Back button 
                <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension='60%'
                    handlePress={() => router.back()}
                />
                ),
                headerRight: () => (
                // Share button 
                <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' handlePress={() => onShare()} />
                ),
                headerTitle: "",
            }}
            />
            {/* Status bar  */}
             <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
            <>
                {/* Scroll view  */}
                <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                >
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : data.length === 0 ? (
                    <Text>No data available</Text>
                ) : (
                    <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>

                    {/* Company info component  */}
                    <Company
                        // @ts-ignore: true
                        companyLogo={data[0].employer_logo}jobTitle={data[0].job_title} companyName={data[0].employer_name} location={data[0].job_country}
                    />

                    {/* Job tabs component   */}
                    <JobTabs
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    {/* Content of the tab  */}
                    {displayTabContent()}
                    </View>
                )}
                </ScrollView>

            {/* Job footer  */}
             <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
            </>

        </SafeAreaView>
  )
}