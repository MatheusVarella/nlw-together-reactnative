import React, { useState } from "react";
import { View, FlatList } from "react-native"; // FlatList é utilizado no lugar da ScrollView quando serão muitos elementos

import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";
import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [category, setCategory] = useState(' ');

  const navigation = useNavigation(); // Para utilizar a navegação

  const appoinments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: false
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
    },
    {
      id: '3',
      guild: {
        id: '3',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
    },
    {
      id: '4',
      guild: {
        id: '4',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
    },
    {
      id: '5',
      guild: {
        id: '5',
        name: 'Lendários',
        icon: null,
        owner: false
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
    },
    {
      id: '6',
      guild: {
        id: '6',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
    },
  ];

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId);
    /* Maneiras diferentes de alterar o estado do check
    if(categoryId === category){
      setCategory('');
    } else {
      setCategory(categoryId);
    }
    */ 
  } // Para marcar e desmarcar um elemento

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }
  
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return(
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <ListHeader 
        title="Partidas agendadas"
        subtitle="Total 6"
      />
      <FlatList 
        data={appoinments}
        keyExtractor={item => item.id} // Lida com id automaticamente
        renderItem={({ item }) => (
          <Appointment 
            data={item}
            onPress={handleAppointmentDetails}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />} // declaro como elemento divisor de lista
        contentContainerStyle={{ paddingBottom: 70 }}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />         
    </Background>
  );
}