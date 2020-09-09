import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {products} from '../data';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function MainScreen() {
  const [cart, setCart] = useState([]);
  const [tempTotal, settempTotal] = useState([]);
  const numColumns = 2;
  const formatData = (products, numColumns) => {
    const numberOfFullRows = Math.floor(products.length / numColumns);
    let numberOfElementsLastRow =
      products.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      products.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
    return products;
  };
  const _renderItem = ({item, i}) => {
    if (item.empty === true) {
      return <View style={styles.emptyItem} />;
    }
    return (
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
            uri: item.imgUri,
          }}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text>
            <Text style={styles.cardPrice}>Rp. {item.price}</Text>
            <Text style={styles.unit}> / porsi</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              setCart([...cart, item]);
              settempTotal([...tempTotal, item.price]);
            }}
            style={styles.btnOrder}>
            <Text style={styles.btnText}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalPrice = tempTotal.length > 0 && tempTotal.reduce(reducer);
  return (
    <>
      <StatusBar hidden={false} />
      <FlatList
        numColumns={numColumns}
        style={styles.container}
        data={formatData(products, numColumns)}
        keyExtractor={(item, i) => i.toString()}
        renderItem={_renderItem}
      />
      <View style={styles.footer}>
        <View style={styles.headFooterContent}>
          <View style={styles.cartDisplayWrapper}>
            <Icon name="shopping-cart" style={styles.cartIcon} size={30} />
            <Text>Rp.{totalPrice ? totalPrice : '0'}</Text>
          </View>
          <View style={styles.btnChargeWrapper}>
            <TouchableOpacity style={styles.btnCharge}>
              <Text style={styles.btnChargeText}>Charge</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.expandIconWrapper}>
            <Icon style={styles.expandIcon} name="chevron-up" size={14} />
          </TouchableOpacity>
          {cart.length === 0 ? null : (
            <View style={styles.countCart}>
              <Text style={styles.countCartText}>{cart.length}</Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    width: '50%',
    flex: 1,
    shadowOpacity: 1,
    shadowOffset: {width: 3, height: 3},
    elevation: 5,
    borderRadius: 5,
    backgroundColor: '#f4f9f4',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    paddingHorizontal: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  cardPrice: {
    color: '#116979',
    fontWeight: 'bold',
  },
  unit: {
    color: 'grey',
  },
  btnOrder: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#133b5c',
    elevation: 5,
    borderRadius: 3,
  },
  btnText: {
    color: '#f4f9f4',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 5,
  },
  emptyItem: {
    backgroundColor: 'transparent',
    width: '50%',
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  footer: {
    position: 'relative',
    width: '100%',
    height: '10%',
    backgroundColor: '#ffff',
    flexDirection: 'column',
    borderTopColor: '#133b5c',
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  headFooterContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartDisplayWrapper: {
    height: '100%',
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    color: '#133b5c',
    marginRight: 10,
  },
  btnChargeWrapper: {
    height: '100%',
    width: '38%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCharge: {
    backgroundColor: '#133b5c',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 3,
    elevation: 5,
  },
  btnChargeText: {
    color: '#f4f9f4',
    fontSize: 15,
  },
  expandIconWrapper: {
    backgroundColor: '#133b5c',
    position: 'absolute',
    padding: 10,
    borderRadius: 20,
    left: 160,
    bottom: 45,
  },
  expandIcon: {
    color: '#f4f9f4',
  },
  countCart: {
    position: 'absolute',
    backgroundColor: '#de7119',
    borderRadius: 15,
    left: 22,
    bottom: 36,
    height: '37%',
    width: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countCartText: {
    color: '#f4f9f4',
  },
});
