import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { ProfileTextInfoProps } from './ProfileTextInfo.types';
import { styles } from './ProfileTextInfo.styles';

const ProfileTextInfo = ({
  name,
  value,
  placeHolder,
  onChange,
}: ProfileTextInfoProps) => {
  return (
    <View style={styles.profileTextInfoContainer}>
      <View style={styles.profileTextInfoWrapper}>
        <Text style={styles.profileFieldName}>{name}</Text>
        <TextInput
          value={value}
          placeholder={placeHolder}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
};

export default ProfileTextInfo;
