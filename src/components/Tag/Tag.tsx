import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { TagProps } from '../../utils/interfaces/Tag';
import { getStatusColor } from '../../utils/functions/getStatusColor';
import genLightenColor from '../../utils/functions/genLightenColor';


const Tag = ({
  title,
  status = 'default',
  color,
  solid,
  tagContainerStyle,
  tagTextStyle,
  borderLess,
  icon,
  iconPosition = 'left',
}: TagProps) => {
  const colorStatus = getStatusColor(status);
  const colorToShow = color ?? colorStatus;

  const enhancedIcon =
    icon &&
    React.cloneElement(icon, {
      color: icon.props.color ?? solid ? "#FFF" : colorToShow,
    });

  return (
    <View
      style={[
        styles.tagContainer,
        {
          backgroundColor: solid ? colorToShow : genLightenColor(colorToShow),
          borderColor: colorToShow,
        },
        tagContainerStyle,
        borderLess && { borderWidth: 0 },
      ]}
    >
      {enhancedIcon && iconPosition === 'left' && enhancedIcon}
      <Text
        style={[
          {
            color: solid ? '#FFF' : colorToShow,
          },
          tagTextStyle,
        ]}
      >
        {title}
      </Text>
      {enhancedIcon && iconPosition === 'right' && enhancedIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    paddingVertical: 3,
    paddingHorizontal: 7,
    alignSelf: 'flex-start',
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});

export default Tag;
