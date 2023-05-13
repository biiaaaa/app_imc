// 1 passo - Importar o react
import react, {useState} from "react";

//2 passo- Importar os componentes da interface gráfica
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity} from "react-native";

// 3 Passo - Criar a tela
export default function Home(){
    
    //Declarando as variaveis useState
    let [peso, setPeso] =useState(0);
    let [altura, setAltura] =useState(0);
    let [imc, setImc] =useState(0);

    //Função CalcularImc
    function CalcularImc(){
        let alt = altura/100;
        let resultado = peso/(alt * alt);
        setImc(resultado.toFixed(2));

            if(imc < 18.6){
                alert('Você está abaixo do peso');
            }

            else if (imc >= 18.6 && imc < 24.9){
                alert('Peso ideal')
            }

            else if(imc > 24.9){
                alert('Levemente acima do peso');
            }
            
      }


    return(
        <View style={styles.container}>
            <Image source={{uri:'https://cdn1.iconfinder.com/data/icons/healthy-life-4/64/weight-scale-sports_and_competition-healthcare_and_medical-weighing_scale_tool-body_scale-512.png'}}
            style={{width:200, height:200, resizeMode:'stretch'}}/>

            <Text style={styles.titulo}>Projeto IMC</Text>
            <TextInput onChangeText={setPeso} style={styles.campo} placeholder="Peso em KG"/>
            <TextInput onChangeText={setAltura} style={styles.campo} placeholder="Altura em CM "/>
            <Text style={styles.subTitulo}>IMC: {imc}</Text>

            <TouchableOpacity style={styles.botao} onPress={CalcularImc}>
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}
    // Fim da função

//4 passo - Criando regras de estilos
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    titulo:{
        color: 'black',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:40,
        marginTop:40,
    },
    campo:{
        backgroundColor: '#FFF',
        borderColor:'black',
        borderWidth:1,
        color:'#0D0D0D',
        fontSize:20,
        fontWeight:'bold',
        padding:14,
        alignItems:'center',
        borderRadius:7,
        marginTop:10,
        width:250
    },
    botao:{
        backgroundColor: '#000000',
        alignItems:'center',
        padding:18,
        borderRadius:7,
        marginTop:10,
        width:250
    },
    botaoTexto:{
        color: '#FFF'
    },
    subTitulo:{
        fontSize:25,
        fontWeight:'bold',
        color: 'black',
        marginBottom:40,
        marginTop:40,
    },
})