import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

const PetLoc = () => {
  const pet = useSelector((state) => state.homeSlice.selectedPet);
  return (
    <View>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={{
          latitude: pet.latitude,
          longitude: pet.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: pet.latitude, longitude: pet.longitude }} />
      </MapView>
    </View>
  );
};

export default PetLoc;
