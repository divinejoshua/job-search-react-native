import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
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
const tabs = ["About", "Qualifications", "Responsibilities"];


export default function JobDetails() {
    const params = useLocalSearchParams();
    const router = useRouter();
  
    const { data, isLoading, error, refetch } = useFetch("job-details", {
      job_id: params.id,
    });
  
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [refreshing, setRefreshing] = useState(false);
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      refetch()
      setRefreshing(false)
    }, []);


  return (
    <View>
      <Text>JobDetails</Text>
    </View>
  )
}