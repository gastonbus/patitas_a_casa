import { StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
import PropTypes from 'prop-types';
import { Avatar, Card } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const PetItem = ({ pet }) => {
  return (
    <Card mode="contained" style={{ width: "90%", backgroundColor: colors.lightYellow, marginTop: 15, alignSelf: "center" }}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Title
        title={pet.description}
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
      {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
    </Card>
    // <Pressable
    //   onPress={() => console.log('Se presionó ir al detalle de una mascota')}
    // >
    //   <View style={styles.container}>
    //     <View style={styles.productImageContainer}>
    //       <Image style={styles.productImage} source={{ uri: pet.image }} />
    //     </View>
    //     <View style={styles.descriptionContainer}>
    //       <Text style={styles.productTitle}>pet.title</Text>
    //       <View style={styles.priceContainer}>
    //         <Text style={styles.productPriceWithDicount}>product.price</Text>
    //         <Text style={styles.productDiscount}>
    //           product.discountPercentage
    //         </Text>
    //       </View>
    //       <Text style={styles.productPrice}>product.price</Text>
    //     </View>
    //   </View>
    // </Pressable>
  );
};

PetItem.propTypes = {
  pet: PropTypes.string.isRequired,
};

export default PetItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    padding: 10,
    backgroundColor: colors.yellow,
  },
  productImageContainer: {},
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  descriptionContainer: {
    width: '100%',
    marginLeft: 10,
  },
  productTitle: {
    fontFamily: 'GlutenBold',
    maxWidth: '75%',
    fontSize: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  productPriceWithDicount: {
    fontFamily: 'GlutenRegular',
    fontSize: 20,
    fontWeight: '600',
  },
  productDiscount: {
    fontSize: 18,
    color: colors.lightGreen,
    fontWeight: '600',
    marginLeft: 15,
    fontFamily: 'GlutenLight',
  },
  productPrice: {
    color: colors.red,
    textDecorationLine: 'line-through',
    fontSize: 12,
    fontFamily: 'GlutenLight',
  },
});
