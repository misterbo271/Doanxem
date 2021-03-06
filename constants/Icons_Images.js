export default class Icons_ImagesUtil {
  static icons = {
    back: require('../assets/icons/back.png'),
    car: require('../assets/icons/car.png'),
    cutlery: require('../assets/icons/cutlery.png'),
    donut: require('../assets/icons/donut.png'),
    drink: require('../assets/icons/drink.png'),
    fire: require('../assets/icons/fire.png'),
    fries: require('../assets/icons/fries.png'),
    hamburger: require('../assets/icons/hamburger.png'),
    hotdog: require('../assets/icons/hotdog.png'),
    like: require('../assets/icons/like.png'),
    list: require('../assets/icons/list.png'),
    location: require('../assets/icons/location.png'),
    master_card: require('../assets/icons/mastercard.png'),
    nearby: require('../assets/icons/nearby.png'),
    noodle: require('../assets/icons/noodle.png'),
    pin: require('../assets/icons/pin.png'),
    pizza: require('../assets/icons/pizza.png'),
    red_pin: require('../assets/icons/red-pin.png'),
    rice_bowl: require('../assets/icons/rice-bowl.png'),
    salad: require('../assets/icons/salad.png'),
    search: require('../assets/icons/search.png'),
    basket: require('../assets/icons/shopping-basket.png'),
    star: require('../assets/icons/star.png'),
    sushi: require('../assets/icons/sushi.png'),
    user: require('../assets/icons/user.png'),
    pho: require('../assets/icons/pho.png'),
    banhmi: require('../assets/icons/banhmi.png'),
    kimchi: require('../assets/icons/kimchi.png'),
    banhbao: require('../assets/icons/banhbao.png'),
    tokbokki: require('../assets/icons/tokbokki.png'),
  };
  static images = {
    avatar_1: require('../assets/images/avatar-1.jpg'),
    avatar_2: require('../assets/images/avatar-2.jpg'),
    avatar_3: require('../assets/images/avatar-3.jpg'),
    avatar_4: require('../assets/images/avatar-4.jpg'),
    avatar_5: require('../assets/images/avatar-5.jpg'),
    baked_fries: require('../assets/images/baked-fries.jpg'),
    burger_restaurant_1: require('../assets/images/burger-restaurant.jpg'),
    burger_restaurant_2: require('../assets/images/burger-restaurant-2.jpg'),
    chicago_hot_dog: require('../assets/images/chicago-hot-dog.jpg'),
    crispy_chicken_burger: require('../assets/images/crispy-chicken-burger.jpg'),
    fries_restaurant: require('../assets/images/fries-restaurant.jpg'),
    hawaiian_pizza: require('../assets/images/hawaiian-pizza.jpg'),
    honey_mustard_chicken_burger: require('../assets/images/honey-mustard-chicken-burger.jpg'),
    hot_dog_restaurant: require('../assets/images/hot-dog-restaurant.jpg'),
    ice_kacang: require('../assets/images/ice-kacang.jpg'),
    japanese_restaurant: require('../assets/images/japanese-restaurant.jpg'),
    kek_lapis_shop: require('../assets/images/kek-lapis-shop.jpg'),
    kek_lapis: require('../assets/images/kek-lapis.jpg'),
    kolo_mee: require('../assets/images/kolo-mee.jpg'),
    nasi_briyani_mutton: require('../assets/images/nasi-briyani-mutton.jpg'),
    nasi_lemak: require('../assets/images/nasi-lemak.jpg'),
    noodle_shop: require('../assets/images/noodle-shop.jpg'),
    pizza_restaurant: require('../assets/images/pizza-restaurant.jpg'),
    pizza: require('../assets/images/pizza.jpg'),
    salad: require('../assets/images/salad.jpg'),
    sarawak_laksa: require('../assets/images/sarawak-laksa.jpg'),
    sushi: require('../assets/images/sushi.jpg'),
    teh_c_peng: require('../assets/images/teh-c-peng.jpg'),
    tomato_pasta: require('../assets/images/tomato-pasta.jpg'),
    banhmi1: require('../assets/images/banhmi1.jpeg'),
    banhmi2: require('../assets/images/banhmi2.jpeg'),
    bunbohue1: require('../assets/images/bunbohue1.jpeg'),
    bunbohue2: require('../assets/images/bunbohue2.jpeg'),
    bunbohue3: require('../assets/images/bunbohue3.jpeg'),
    buncha1: require('../assets/images/buncha1.jpeg'),
    buncha2: require('../assets/images/buncha2.jpeg'),
    hutieu1: require('../assets/images/hutieu1.jpeg'),
    hutieu2: require('../assets/images/hutieu2.jpeg'),
    hutieu3: require('../assets/images/hutieu3.jpeg'),
    hutieu4: require('../assets/images/hutieu4.jpeg'),
    kimchi1: require('../assets/images/kimchi1.jpeg'),
    kimchi2: require('../assets/images/kimchi2.jpeg'),
    kimchi3: require('../assets/images/kimchi3.jpeg'),
    manthau1: require('../assets/images/manthau1.jpeg'),
    manthau2: require('../assets/images/manthau2.jpeg'),
    manthau3: require('../assets/images/manthau3.jpeg'),
    pho1: require('../assets/images/pho1.jpeg'),
    pho2: require('../assets/images/pho2.jpeg'),
    pho3: require('../assets/images/pho3.jpeg'),
    sushi1: require('../assets/images/sushi1.jpeg'),
    sushi2: require('../assets/images/sushi2.jpeg'),
    tokbokki1: require('../assets/images/tokbokki1.jpeg'),
    tradao1: require('../assets/images/tradao1.jpeg'),
    tradao2: require('../assets/images/tradao2.jpeg'),
    tradao3: require('../assets/images/tradao3.jpeg'),
    tradao4: require('../assets/images/tradao4.jpeg'),
    tradao5: require('../assets/images/tradao5.jpeg'),
    tradao6: require('../assets/images/tradao6.jpeg'),
    res1: require('../assets/images/restaurant1.jpg'),
    res2: require('../assets/images/res2.jpeg'),
    res3: require('../assets/images/res3.jpeg'),
    res4: require('../assets/images/res4.jpeg'),
    res5: require('../assets/images/res5.jpeg'),
    res6: require('../assets/images/res6.jpeg'),
  };
  static getIconsorImages(imageUrl) {
    if (this.icons[imageUrl]) {
      return this.icons[imageUrl];
    } else {
      return this.images[imageUrl];
    }
  }
}
