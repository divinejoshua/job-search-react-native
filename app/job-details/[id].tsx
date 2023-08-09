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


  return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

            {/* Stack screen settings  */}
            <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension='60%'
                    handlePress={() => router.back()}
                />
                ),
                headerRight: () => (
                <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
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

            </>

        </SafeAreaView>
  )
}