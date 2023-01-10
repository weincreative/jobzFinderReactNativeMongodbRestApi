import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import React, { useCallback, forwardRef, useImperativeHandle } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  useAnimatedGestureHandler,
} from "react-native-reanimated";

const BottomSheet = forwardRef(
  ({ activeHeight, backDropColor, backgroundColor, children }, ref) => {
    const height = useWindowDimensions().height;
    const newActiveHeight = height - activeHeight;
    const topAnimation = useSharedValue(height);
    const animationStyle = useAnimatedStyle(() => {
      const top = topAnimation.value;
      return {
        top,
      };
    });

    const backDropAnimation = useAnimatedStyle(() => {
      const opacity = interpolate(
        topAnimation.value,
        [height, newActiveHeight],
        [0, 0.5]
      );
      const display = opacity === 0 ? "none" : "flex";
      return {
        opacity,
        display,
      };
    });

    const gestureHandler = useAnimatedGestureHandler({
      onStart: (_, ctx) => {
        ctx.startY = topAnimation.value;
      },
      onActive: (event, ctx) => {
        if (event.translationY <= 0) {
          topAnimation.value = withSpring(newActiveHeight, {
            damping: 100,
            stiffness: 400,
          });
        } else {
          topAnimation.value = withSpring(ctx.startY + event.translationY, {
            damping: 100,
            stiffness: 400,
          });
        }
      },
      onEnd: () => {
        if (topAnimation.value > newActiveHeight + 200) {
          topAnimation.value = withSpring(height, {
            damping: 100,
            stiffness: 400,
          });
        } else {
          topAnimation.value = withSpring(newActiveHeight, {
            damping: 100,
            stiffness: 400,
          });
        }
      },
    });

    const expand = useCallback(() => {
      "worklet";
      topAnimation.value = withSpring(newActiveHeight, {
        damping: 100,
        stiffness: 400,
      });
    }, []);

    const close = useCallback(() => {
      "worklet";
      topAnimation.value = withSpring(height, {
        damping: 100,
        stiffness: 400,
      });
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        expand,
        close,
      }),
      [expand, close]
    );

    return (
      <>
        <TouchableWithoutFeedback
          onPress={() => {
            close();
          }}
        >
          <Animated.View
            style={[
              {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              },
              backDropAnimation,
              { backgroundColor: backDropColor },
            ]}
          />
        </TouchableWithoutFeedback>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
              animationStyle,
              { height: activeHeight, backgroundColor: backgroundColor },
            ]}
          >
            <View style={{ marginVertical: 10, alignItems: "center" }}>
              <View
                style={{
                  width: 50,
                  height: 4,
                  backgroundColor: "grey",
                  borderRadius: 20,
                }}
              ></View>
            </View>
            {children}
          </Animated.View>
        </PanGestureHandler>
      </>
    );
  }
);

export default BottomSheet;

const styles = StyleSheet.create({});
