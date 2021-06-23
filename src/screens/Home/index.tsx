import React, { useState } from "react";
import { View, FlatList, Text } from "react-native"; // FlatList é utilizado no lugar da ScrollView quando serão muitos elementos

import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";
import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";

export function Home() {
  const [category, setCategory] = useState(' ');

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
    },{
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

  return(
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}> 
          <ListHeader 
            title="Partidas agendadas"
            subtitle="Total 6"
          />
          <FlatList 
              data={appoinments}
              keyExtractor={item => item.id} // Lida com id automaticamente
              renderItem={({ item }) => (
              <Appointment data={item}/>
            )}
              ItemSeparatorComponent={() => <ListDivider />} // declaro como elemento divisor de lista
              style={styles.matches}
              showsVerticalScrollIndicator={false}
          />         
        </View>
    </Background>
  );
}