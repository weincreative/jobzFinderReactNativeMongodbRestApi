import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import jobs from "../../../data/jobs";

dayjs.extend(relativeTime);

import { Jobs, WorkerCount } from "../../../Icons";

function JobsDetails({ route, navigation }) {
  const { userId } = route.params;
  const jobAllInformation = jobs.find((k) => k._id == userId);

  return (
    <View style={{ felx: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: 44,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      ></View>
      <ScrollView
        style={{ backgroundColor: "#f3f2ef" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ backgroundColor: "white", marginBottom: 10 }}>
          <Text
            style={{
              marginTop: 15,
              marginBottom: 7.5,
              marginLeft: 7,
              fontSize: 22,
              fontWeight: "bold",
              alignItems: "center",
              color: "#0A66C2",
            }}
          >
            {jobAllInformation.jobName}
          </Text>
          <View
            style={{
              width: 427,
              //height: 87.97,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 8,
              //marginBottom: 5,
            }}
          >
            <Image
              style={{
                width: 56,
                height: 56,
                backgroundColor: "grey",
                marginLeft: 5,
                /*                 borderWidth: 1.5,
                borderColor: "black",
                borderRadius: 25, */
              }}
              source={{
                uri: jobAllInformation.jobDetail1.jobLogo,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  marginTop: 9,
                  fontSize: 16,
                  color: "#000",
                }}
              >
                {jobAllInformation.jobDetail1.jobWorkplaceName}
              </Text>
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 14,
                  color: "#00000099",
                }}
              >
                {jobAllInformation.jobDetail1.jobLocation}
                {` (${jobAllInformation.jobDetail1.jobOnsite})`}
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginLeft: 12,
              marginBottom: 15,
              fontSize: 14,
              color: "#097845",
            }}
          >
            {`${dayjs(jobAllInformation.jobDetail1.jobCreateAt).fromNow()} .`}
          </Text>
          <View
            style={{
              height: 0.5,
              backgroundColor: "#DADADA",
            }}
          />
          <View style={{ marginLeft: 15, marginTop: 5, flexDirection: "row" }}>
            <Jobs size={29} fill={"grey"} />
            <Text
              style={{ marginLeft: 6, marginTop: 7 }}
            >{`[ ${jobAllInformation.jobDetail1.jobType} ]`}</Text>
          </View>
          <View style={{ marginLeft: 15, marginTop: 5, flexDirection: "row" }}>
            <WorkerCount size={29} fill={"grey"} />
            <Text
              style={{ marginLeft: 6, marginTop: 7 }}
            >{` ${jobAllInformation.jobDetail1.jobEmployeesCount} çalışan`}</Text>
          </View>
        </View>
        <View style={{ backgroundColor: "white", marginBottom: 15 }}>
          <Text
            style={{
              marginTop: 9,
              fontSize: 16,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Şirket hakkında
          </Text>
          <View style={{ marginLeft: 5 }}>
            <Text
              style={{
                marginTop: 15,
                fontSize: 16,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              {jobAllInformation.jobName}
            </Text>
            <Text style={{ marginTop: 7, marginBottom: 9 }}>
              {jobAllInformation.jobAbout}
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: "white", marginBottom: 15 }}>
          <Text
            style={{
              marginTop: 5,
              fontSize: 16,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Şirket hakkında
          </Text>
          <View style={{ marginLeft: 5 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: "grey",
                  marginLeft: 5,
                  /*                 borderWidth: 1.5,
              borderColor: "black",
              borderRadius: 25, */
                }}
                source={{
                  uri: jobAllInformation.jobDetail1.jobLogo,
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 16,
                  fontWeight: "bold",
                  alignItems: "center",
                }}
              >
                {jobAllInformation.jobDetail1.jobWorkplaceName}
              </Text>
            </View>
            <Text style={{ marginTop: 12, marginBottom: 75 }}>
              {jobAllInformation.jobDetail1.jobWorkPlaceAbout}
            </Text>
          </View>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
}

export default JobsDetails;
const styles = StyleSheet.create({});
