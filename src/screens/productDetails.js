import React,{useState} from 'react'
import {FlatList, Text,View,Image, Button, ScrollView} from 'react-native'
import Products from '../services/Products'
import Headers from '../components/Header'
import ButtonBuy from '../components/ButtonBuy'
function Item({ uri }) {

	return (
		<View style={styles.itemContainer}>
			<Image source={{ uri }} style={styles.img}></Image>
		</View>
	);
    }
export default function productDetails ({navigation,route})
{
    const idProduct=route.params.id;
   
    const product = Products.filter((item) => item.id === idProduct)[0];
    const [number,setNumber]=useState(0)
    const  goBack=()=>{ navigation.goBack()

    }
    const handleAddProduct=()=>{
        setNumber(state=>state+1)
    }
    const handleSubProduct=()=>{
        setNumber(state=>state-1)
    }
    
    return (
      <ScrollView
      >
        <Headers
          onBack={goBack}
          title="Product details"
        ></Headers>
        <FlatList
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          horizontal={true}
          data={product.carouselImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <Item uri={item}></Item>;
          }}
        />
        <ButtonBuy number={number} onAddProduct={handleAddProduct} onSubProduct={handleSubProduct}/>
        <View style={styles.item}>
          <Text style={styles.header}>Product name</Text>
          <Text style={styles.info}>{product.name}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Product detail</Text>
          <Text style={styles.info}>{product.details}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Product colour</Text>
          <Text style={styles.info}>{product.colour}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Product sizes</Text>
          <Text style={styles.info}>{product.sizes.toString()}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Product price</Text>
          <Text style={styles.info}>{product.price}</Text>
        </View>
      </ScrollView>
    );
}
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    },
    item: {
        marginHorizontal: 16,
        marginVertical: 8
    },
    header: {
        fontSize: 18,
        fontWeight: '700'
    },
    info: {
        fontSize: 15
    },
    itemContainer: {
        width,
        height: 400
    },
    img: {
        width,
        height: 400
    }
})


