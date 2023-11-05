/* eslint-disable react/prop-types */
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const Search = ({ searchText, setSearchText, resultsLength }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          placeholder="Escriba aquí"
          onChangeText={(value) => setSearchText(value)}
        />
        <Pressable style={styles.clearIcon} onPress={() => setSearchText('')}>
          <AntDesign name="closecircleo" size={25} color={colors.darkBlue} />
        </Pressable>
      </View>
      <Text style={styles.resultLength}>{resultsLength} mascotas encontradas</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    width: '80%',
    height: 40,
    padding: 10,
    backgroundColor: colors.ultraLightBlue,
		borderWidth: 1,
		borderColor: colors.darkBlue,
		color: colors.darkBlue,
  },
  clearIcon: {
    marginLeft: 15,
  },
	resultLength: {
		color: colors.darkBlue,
		fontSize: 16,
		marginTop: 5,
	}
});
