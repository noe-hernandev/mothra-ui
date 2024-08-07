import { StyleSheet, View } from 'react-native';
import { Tag } from 'react-native-mothra-ui';
import Icon from 'react-native-vector-icons/AntDesign';

export default function App() {

  return (
    <View style={styles.container}>
      <Tag
       color='#2db7f5'
        icon={<Icon size={16} name="warning" />}
        title="Esta es una etiqueta"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
