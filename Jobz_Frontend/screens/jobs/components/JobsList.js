import React, { useState } from "react";
import { TouchableOpacity, ScrollView, Image, View, Text } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import jobs from "../../../data/jobs";
import { CreateJob } from "../../../Icons";

import { useAuth } from "../../../AuthContext";

dayjs.extend(relativeTime);

function JobsList({ navigation }) {
  const [Auth, setAuth] = useAuth();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 44,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("JobsCreate", {
              userAuth: Auth,
            })
          }
          style={{ flexDirection: "row", marginRight: 8 }}
        >
          <CreateJob size={18} fill={"black"} />
          <Text style={{ marginLeft: 5, fontSize: 18 }}>İş ilanı yayınla</Text>
        </TouchableOpacity>
      </View>
      <Text>{`${jobs.length} sonuç`}</Text>
      <ScrollView style={{ backgroundColor: "#f3f2ef" }}>
        {jobs.map((job) => (
          <TouchableOpacity
            key={job._id}
            onPress={() =>
              navigation.navigate("JobsDetails", {
                userId: job._id,
              })
            }
          >
            <View
              style={{
                width: 427,
                height: 87.97,
                flexDirection: "row",
                alignItems: "stretch",
                backgroundColor: "white",
                padding: 8,
              }}
            >
              <Image
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: "grey",
                  /*borderWidth: 1.5,
                borderColor: "black",
                borderRadius: 25, */
                }}
                source={{
                  uri: job.jobDetail1.jobLogo,
                }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#0A66C2",
                  }}
                >
                  {job.jobName}
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    color: "#000000E6",
                  }}
                >
                  {job.jobDetail1.jobWorkplaceName}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#00000099",
                  }}
                >
                  {job.jobDetail1.jobLocation}
                  {"(" + job.jobDetail1.jobOnsite + ")"}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#00000099",
                  }}
                >
                  {"[" + job.jobDetail1.jobType + "]"}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#00000099",
                  }}
                >
                  {dayjs(job.jobDetail1.jobCreateAt).fromNow()}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 0.5,
                backgroundColor: "#DADADA",
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
export default JobsList;
