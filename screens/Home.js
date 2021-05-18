import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES, FONTS, Icons_ImagesUtil} from '../constants';

const Home = ({navigation}) => {
  const initialCurrentLocation = {
    streetName: 'KTX khu A',
    gps: {
      latitude: 10.78944,
      longitude: 106.69754,
    },
  };

  const categoryData = [
    {
      id: 1,
      name: 'Bún bò Huế',
      icon: Icons_ImagesUtil.icons.rice_bowl,
    },
    {
      id: 2,
      name: 'Hủ tiếu',
      icon: Icons_ImagesUtil.icons.noodle,
    },
    {
      id: 3,
      name: 'Bánh mì',
      icon: Icons_ImagesUtil.icons.banhmi,
    },
    {
      id: 4,
      name: 'Phở',
      icon: Icons_ImagesUtil.icons.pho,
    },
    {
      id: 5,
      name: 'Tobbokki',
      icon: Icons_ImagesUtil.icons.tokbokki,
    },
    {
      id: 6,
      name: 'Màn thầu',
      icon: Icons_ImagesUtil.icons.banhbao,
    },
    {
      id: 7,
      name: 'Kimchi',
      icon: Icons_ImagesUtil.icons.kimchi,
    },
    {
      id: 8,
      name: 'Sushi',
      icon: Icons_ImagesUtil.icons.sushi,
    },
    {
      id: 9,
      name: 'Bún chả',
      icon: Icons_ImagesUtil.icons.noodle,
    },
    {
      id: 10,
      name: 'Đồ uống',
      icon: Icons_ImagesUtil.icons.drink,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: 'ADong Restaurant',
      rating: 4.8,
      categories: [1, 3, 4],
      priceRating: affordable,
      photo: Icons_ImagesUtil.images.res2,
      duration: '30 - 45 min',
      location: {
        latitude: 10.78944,
        longitude: 106.69754,
      },
      courier: {
        avatar: Icons_ImagesUtil.images.avatar_4,
        name: 'Mien PV',
      },
      menu: [
        {
          menuId: 1,
          name: 'MienPV Chicken Burger',
          photo: Icons_ImagesUtil.images.bunbohue1,
          description: 'Burger with MienPV chicken, cheese and lettuce',
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: 'MienPV Chicken Burger with Honey Mustard',
          photo: Icons_ImagesUtil.images.honey_mustard_chicken_burger,
          description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: 'MienPV Baked French Fries',
          photo: Icons_ImagesUtil.images.baked_fries,
          description: 'Crispy Baked French Fries',
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: 'MienPV Restaurant',
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: Icons_ImagesUtil.images.res1,
      duration: '15 - 20 min',
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: Icons_ImagesUtil.images.avatar_2,
        name: 'Mien PV',
      },
      menu: [
        {
          menuId: 4,
          name: 'MienPV Pizza',
          photo: Icons_ImagesUtil.images.hawaiian_pizza,
          description: 'Canadian bacon, homemade pizza crust, pizza sauce',
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: 'Tomato & Basil Pizza',
          photo: Icons_ImagesUtil.images.pizza,
          description:
            'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: 'Tomato Pasta',
          photo: Icons_ImagesUtil.images.tomato_pasta,
          description: 'Pasta with fresh tomatoes',
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: 'Mediterranean Chopped Salad ',
          photo: Icons_ImagesUtil.images.salad,
          description: 'Finely chopped lettuce, tomatoes, cucumbers',
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: 'Luxury Food',
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: Icons_ImagesUtil.images.res3,
      duration: '20 - 25 min',
      location: {
        latitude: 10.78944,
        longitude: 106.69754,
      },
      courier: {
        avatar: Icons_ImagesUtil.images.avatar_3,
        name: 'Mien PV',
      },
      menu: [
        {
          menuId: 8,
          name: 'Chicago Style Hot Dog',
          photo: Icons_ImagesUtil.images.chicago_hot_dog,
          description: 'Fresh tomatoes, all beef hot dogs',
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: '寿司 Sushi',
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: Icons_ImagesUtil.images.res4,
      duration: '10 - 15 min',
      location: {
        latitude: 10.78944,
        longitude: 106.69754,
      },
      courier: {
        avatar: Icons_ImagesUtil.images.avatar_4,
        name: 'Ahmad',
      },
      menu: [
        {
          menuId: 9,
          name: 'Sushi sets',
          photo: Icons_ImagesUtil.images.sushi,
          description: 'Fresh salmon, sushi rice, fresh juicy avocado',
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: 'JVCK Food',
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: Icons_ImagesUtil.images.res5,
      duration: '15 - 20 min',
      location: {
        latitude: 10.78944,
        longitude: 106.69754,
      },
      courier: {
        avatar: Icons_ImagesUtil.images.avatar_4,
        name: 'Muthu',
      },
      menu: [
        {
          menuId: 10,
          name: 'Kolo Mee',
          photo: Icons_ImagesUtil.images.kolo_mee,
          description: 'Noodles with char siu',
          calories: 200,
          price: 5,
        },
        {
          menuId: 11,
          name: 'Sarawak Laksa',
          photo: Icons_ImagesUtil.images.sarawak_laksa,
          description: 'Vermicelli noodles, cooked prawns',
          calories: 300,
          price: 8,
        },
        {
          menuId: 12,
          name: 'Nasi Lemak',
          photo: Icons_ImagesUtil.images.nasi_lemak,
          description: 'A traditional Malay rice dish',
          calories: 300,
          price: 8,
        },
        {
          menuId: 13,
          name: 'Nasi Briyani with Mutton',
          photo: Icons_ImagesUtil.images.nasi_briyani_mutton,
          description: 'A traditional Indian rice dish with mutton',
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: 'Family Dish',
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: Icons_ImagesUtil.images.res6,
      duration: '35 - 40 min',
      location: {
        latitude: 10.78944,
        longitude: 106.69754,
      },
      courier: {
        avatar: Icons_ImagesUtil.images.avatar_1,
        name: 'Jessie',
      },
      menu: [
        {
          menuId: 12,
          name: 'Teh C Peng',
          photo: Icons_ImagesUtil.images.teh_c_peng,
          description: 'Three Layer Teh C Peng',
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: 'ABC Ice Kacang',
          photo: Icons_ImagesUtil.images.ice_kacang,
          description: 'Shaved Ice with red beans',
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: 'Kek Lapis',
          photo: Icons_ImagesUtil.images.kek_lapis,
          description: 'Layer cakes',
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  //Edit Info later
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id);

    if (category.length > 0) return category[0].name;

    return '';
  }

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={Icons_ImagesUtil.icons.nearby}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: COLORS.lightGray3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
            }}>
            <Text
              style={{
                ...FONTS.h3,
              }}>
              {currentLocation.streetName}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: 20,
            justifyContent: 'center',
          }}>
          <Image
            source={Icons_ImagesUtil.icons.basket}
            resizedMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  //Main categories
  function renderMainCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{padding: SIZES.padding * 2}}>
        <Text style={{...FONTS.h1}}>Main</Text>
        <Text style={{...FONTS.h1}}>Categories</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  }
  //Restaurant
  function renderRestaurantList() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{marginBottom: SIZES.padding * 2}}
          //onPress->navigate to restaurant
        >
          {/* <Image /> */}
          <View>
            <Image
              source={item.photo}
              resizeMode="cover"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: '100%',
                height: 200,
                borderRadius: SIZES.radius,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: 50,
                width: SIZES.width * 0.3,
                backgroundColor: COLORS.white,
                borderTopRightRadius: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center',
                ...styles.shadow,
              }}>
              <Text style={{...FONTS.h4}}>{item.duration}</Text>
            </View>
          </View>
          {/* Restaurant Info */}
          <Text style={{...FONTS.body2}}>{item.name}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
export default Home;
