import React, { useState } from "react";
import { View } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState(' ');

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
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>
    </View>
  );
}