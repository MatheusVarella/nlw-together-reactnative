import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";

import { 
  View, 
  Text,
  Platform, // Se referemciar a plataforma do dispositivo
  ScrollView,
  KeyboardAvoidingView // Para a interface subir junto com o teclado
} from "react-native";

import { COLLECTION_APPOINTMENT } from "../../configs/database"
import { styles } from "../AppointmentCreate/styles";
import { theme } from "../../global/styles/theme";

import { CategorySelect } from "../../components/CategorySelect";
import { ModalView } from "../../components/ModalView";
import { SmallInput } from "../../components/SmallInput";
import { GuildIcon } from "../../components/GuildIcon";
import { Background } from "../../components/Background";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Guild";

export function AppointmentCreate() {
  const [category, setCategory] = useState(' ');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps); // Começa como objeto vazio do tipo GruidProps

  const [ day, setDay] = useState('');
  const [ month, setMonth ] = useState('');
  const [ hour, setHour ] = useState('');
  const [ minute, setMinute ] = useState('');
  const [ description, setDescription ] = useState('');

  const navigation = useNavigation()

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }
  
  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildsSelect(guildsSelect: GuildProps) {
    setGuild(guildsSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string){
    setCategory(categoryId); 
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}`,
      description

    };
    
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
    const appointment = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENT,
      JSON.stringify([...appointment, newAppointment])
    );
    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}

    >
      <Background>
        <ScrollView>

          <Header 
            title="Agendar partida"
          />

            <Text style={[
              styles.label, 
              { 
                marginLeft: 34, 
                marginTop: 36, 
                marginBottom: 18 
              }]} 
            >
              Categoria
            </Text>
          
          <CategorySelect 
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon 
                  ? <GuildIcon guildId={guild.id} iconId={guild.icon}/> 
                  : <View style={styles.image} /> 
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    { guild.name 
                    ? guild.name 
                    : "Selecione um servidor" }
                  </Text>
                </View>

                <Feather 
                  name="chevron-right"
                  color={theme.colors.highlight}
                  size={18}
                />

              </View>
            </RectButton>

            <View style={styles.field}> 
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SmallInput 
                    maxLength={2} 
                    onChangeText={setDay}
                  />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput 
                    maxLength={2} 
                    onChangeText={setMonth}
                  />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <SmallInput 
                    maxLength={2} 
                    onChangeText={setHour}
                  />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput 
                    maxLength={2} 
                    onChangeText={setMinute}
                  />
                </View>
              </View>
                
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.caracteresLimit}>
                Max 100 caracteres
              </Text>
            </View>

            <TextArea 
              multiline // consegue dar Enter
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />

            <View style={styles.footer}>
              <Button 
                title="Agendar"
                onPress={handleSave}
              />
            </View>
                
          </View>
          </ScrollView>        
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildsSelect}/>
      </ModalView>
    </KeyboardAvoidingView>
  );
}