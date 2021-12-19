import * as React from 'react';
import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity, Image, TextInput, AsyncStorageStatic, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
//suggestions section
function ShowerSuggestion(value) {
  
  if (parseInt(value)>=8) {
    return (
    <Text>
      We recommend you try to take showers that are less than 8 minutes in length.
    </Text>
    );
  }
  
}

function LaundrySuggestion(value) {
  if (parseInt(value)>=2) {
    return (
      <Text>
        Try not to do small loads of laundry very frequently. {value} small loads can also be less big loads.
      </Text>
    )
  }
}
//dismiss keyboard
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}

  </TouchableWithoutFeedback>

);

const windowWidth = Dimensions.get('window').width;

//home screen
function HomeScreen({navigation}) {
  return (
    <DismissKeyboard>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.drinkButton}
        onPress = {() => navigation.navigate('Drink')}

      >
        <Image
          style={styles.image2}
          source={require('./assets/bottle.png')}
        >

        </Image>


      </TouchableOpacity>

      <TouchableOpacity
        style={styles.usageButton}
        onPress = {() => navigation.navigate('Usage')}
      >

        <Image
          style={styles.image1}
          source={require('./assets/shower-head.png')}
        >

        </Image>

      </TouchableOpacity>
    </View>
    </DismissKeyboard>
  )
}

//drink screen
const DrinkScreen = () => {
  const [total, setTotal] = useState('0');
  const [remain, setRemain] = useState('0');
  return (
    <DismissKeyboard>
    <View style={styles.container2}>
      <Text style={styles.weightText}>
        Enter Weight: 
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(value) => setTotal(value)}
      >

      </TextInput>
      <Text style={styles.weightText}> Enter Ounces Drank Today: </Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(val) => setRemain(val)}
      >

      </TextInput>
      <Text>
        Drink {(parseInt(total))/2} fluid ounces of water today. You have {(parseInt(total))/2-parseInt(remain)} ounces left to drink!

      </Text>

    </View>
    </DismissKeyboard>

  );

}

//usage screen
const UsageScreen = () => {
  const [flush, setFlush] = useState('0');
  const [shower, setShower] = useState('0');
  const [dish, setDish] = useState('0');
  const [laundry, setLaundry] = useState('0');
  const [remain, setGoal] = useState('0');
  return (
    <DismissKeyboard>
    <View style={styles.container2}>
      <Text style = {styles.weightText}>
        Total Toilet Flushes: 
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(value) => setFlush(value)}
      >

      </TextInput>
      <Text style = {styles.weightText}> Minutes Showered </Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(val) => setShower(val)}
      >

      </TextInput>
      <Text style = {styles.weightText}>
        Loads of Laundry:  
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(va) => setLaundry(va)}
      >

      </TextInput>
      <Text style = {styles.weightText}>
        Loads of Dishwashing:  
      </Text>

      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(er) => setDish(er)}
      >

      </TextInput>
      
      <Text>
        You have used {10*parseInt(dish)+1.6*parseInt(flush)+20*parseInt(laundry)+2.1*parseInt(shower)} gallons of water today!
        

      </Text>
      <Text>
      {ShowerSuggestion(shower)}
      </Text>
      <Text>
        {LaundrySuggestion(laundry)}
      </Text>
      
      
      

    </View>
    </DismissKeyboard>

  );

}
//navigation between pages
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {HomeScreen} />
            <Stack.Screen name = "Drink" component = {DrinkScreen} />
            <Stack.Screen name = "Usage" component = {UsageScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
//stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#cfe8ff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  drinkButton: {
    position: 'absolute',
    
    top: 0,

    width: '100%',
    height: '50%',
    backgroundColor: "#c7eaff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  usageButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: "#a3ddff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  weightText: {
    
    fontSize: 30,
    
    
  },
  waterText:{
    position: 'absolute',
     fontSize: 20,
     marginTop: 10,
     bottom: '15%',
     textAlign: 'center',



  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: "60%",
    textAlign: 'center',

  },
  image1: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '30%',

  },
  image2: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    height: '45%',

  },

    
  
});

export default App;
