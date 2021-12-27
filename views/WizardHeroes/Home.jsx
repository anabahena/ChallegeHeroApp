import React, {useCallback, useEffect, useState} from 'react';
import {Content, Container, Header, Left, Body, Button, Right} from "native-base";
import methods from "../methods";
import {FlatList, StatusBar, View, ScrollView, Text, StyleSheet, useColorScheme} from 'react-native';
import Card from "../../components/Card";
import {useTheme} from "@react-navigation/native";
import {FontAwesome, Ionicons} from '@expo/vector-icons';

const Home = ({navigation}) => {
    const [heroes, setHeroes] = useState([]),
        [loading, setLoading] = useState(false),
        {colors} = useTheme(),
        scheme = useColorScheme(),
        [callMomentum, setCallMomentum] = useState(false);

    const getHeroes = useCallback(() => {
        const request = async () => {
            setLoading(true);
            return await methods.getHeroes.create();
        }
        request()
            .then((data) => {
                setHeroes(data);
            })
            .catch(error => {

            });
    }, [heroes]);


    useEffect(() => {
        getHeroes();
    }, []);

    const renderItem = ({item}) => {
        return (
            <Card item={item} navigation={navigation}/>
        )
    }

    const humans = heroes.filter(item => item.appearance.race === 'Human'),
        cosmicEntity = heroes.filter(item => item.appearance.race === 'Cosmic Entity'),
        humanRadiation = heroes.filter(item => item.appearance.race === 'Human / Radiation'),
        sapiens = heroes.filter(item => item.appearance.race === 'Icthyo Sapien'),
        ungaran = heroes.filter(item => item.appearance.race === 'Ungaran'),
        others = heroes.filter(item => item.appearance.race === null),
        cyborg = heroes.filter(item => item.appearance.race === 'Cyborg'),
        xenomorph = heroes.filter(item => item.appearance.race === 'Xenomorph XX121'),
        android = heroes.filter(item => item.appearance.race === 'Android'),
        vampire = heroes.filter(item => item.appearance.race === 'Vampire'),
        mutant = heroes.filter(item => item.appearance.race === 'Mutant'),
        godEternal = heroes.filter(item => item.appearance.race === 'God / Eternal'),
        symbiote = heroes.filter(item => item.appearance.race === 'Symbiote'),
        atlantean = heroes.filter(item => item.appearance.race === 'Atlantean'),
        alien = heroes.filter(item => item.appearance.race === 'Alien'),
        neyaphem = heroes.filter(item => item.appearance.race === 'Neyaphem'),
        newGod = heroes.filter(item => item.appearance.race === 'New God'),
        alpha = heroes.filter(item => item.appearance.race === 'Alpha'),
        bizarro = heroes.filter(item => item.appearance.race === 'Bizarro'),
        inhuman = heroes.filter(item => item.appearance.race === 'Inhuman'),
        metahuman = heroes.filter(item => item.appearance.race === 'Metahuman');


    return (
        <Container style={{backgroundColor:colors.background}}>
            <Header style={[styles.header, {backgroundColor:colors.background}]}>
                <Body style={{
                    flex:1
                }}>
                    <Text style={[styles.title, {color: colors.secondary}]}>
                        HeroApp
                    </Text>
                </Body>
                <Left style={{flex:0}}>
                    <Button transparent style={styles.search} onPress={()=> navigation.navigate('Search')}>
                        <FontAwesome name="search" size={24} color="black" />
                    </Button>
                </Left>
            </Header>
            <StatusBar backgroundColor={colors.background}
                       barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
            />
            <Content>
                <Text style={styles.heading}>
                    Humanos
                </Text>
                <FlatList
                    data={humans}
                    renderItem={renderItem}
                    style={{width: '95%', marginLeft:10, alignSelf:'center'}}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    //getItemLayout={getItemLayout}
                    initialNumToRender={5}
                    maxToRenderPerBatch={3}
                    removeClippedSubviews={true}
                    windowSize={5}
                    updateCellsBatchingPeriod={100}
                    onMomentumScrollBegin={() => {
                        console.log('onMomentumScrollBegin')
                        setCallMomentum(false);
                    }}
                    onMomentumScrollEnd={() => console.log('onMomentumScrollEnd')}
                    onEndReachedThreshold={10}
                    //onEndReached={onEndReached}
                />
                <Text style={styles.heading}>
                    Entidad cósmica
                </Text>
                <FlatList
                    data={cosmicEntity}
                    renderItem={renderItem}
                    style={{width: '95%', marginLeft:10, alignSelf:'center'}}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    initialNumToRender={5}
                    maxToRenderPerBatch={3}
                    removeClippedSubviews={true}
                    windowSize={5}
                    updateCellsBatchingPeriod={100}
                    onMomentumScrollBegin={() => {
                        console.log('onMomentumScrollBegin')
                        setCallMomentum(false);
                    }}
                    onMomentumScrollEnd={() => console.log('onMomentumScrollEnd')}
                    onEndReachedThreshold={10}
                />
                <Text style={styles.heading}>
                    Humano / Radiación
                </Text>
                <FlatList
                    data={humanRadiation}
                    renderItem={renderItem}
                    style={{width: '95%', marginLeft:10, alignSelf:'center'}}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    initialNumToRender={5}
                    maxToRenderPerBatch={3}
                    removeClippedSubviews={true}
                    windowSize={5}
                    updateCellsBatchingPeriod={100}
                    onMomentumScrollBegin={() => {
                        console.log('onMomentumScrollBegin')
                        setCallMomentum(false);
                    }}
                    onMomentumScrollEnd={() => console.log('onMomentumScrollEnd')}
                    onEndReachedThreshold={10}
                />
                <Text style={styles.heading}>
                    Cyborg
                </Text>
                <FlatList
                    data={cyborg}
                    renderItem={renderItem}
                    style={{width: '95%', marginLeft:10, alignSelf:'center'}}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    initialNumToRender={5}
                    maxToRenderPerBatch={3}
                    removeClippedSubviews={true}
                    windowSize={5}
                    updateCellsBatchingPeriod={100}
                    onMomentumScrollBegin={() => {
                        console.log('onMomentumScrollBegin')
                        setCallMomentum(false);
                    }}
                    onMomentumScrollEnd={() => console.log('onMomentumScrollEnd')}
                    onEndReachedThreshold={10}
                />
                <Text style={styles.heading}>
                    Mutantes
                </Text>
                <FlatList
                    data={mutant}
                    renderItem={renderItem}
                    style={{width: '95%', marginLeft:10, alignSelf:'center'}}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    initialNumToRender={5}
                    maxToRenderPerBatch={3}
                    removeClippedSubviews={true}
                    windowSize={5}
                    updateCellsBatchingPeriod={100}
                    onMomentumScrollBegin={() => {
                        console.log('onMomentumScrollBegin')
                        setCallMomentum(false);
                    }}
                    onMomentumScrollEnd={() => console.log('onMomentumScrollEnd')}
                    onEndReachedThreshold={10}
                />
                <Text style={styles.heading}>
                    Androides
                </Text>
                <FlatList
                    data={android}
                    renderItem={renderItem}
                    style={{width: '95%', marginLeft:10, alignSelf:'center'}}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    initialNumToRender={5}
                    maxToRenderPerBatch={3}
                    removeClippedSubviews={true}
                    windowSize={5}
                    updateCellsBatchingPeriod={100}
                    onMomentumScrollBegin={() => {
                        console.log('onMomentumScrollBegin')
                        setCallMomentum(false);
                    }}
                    onMomentumScrollEnd={() => console.log('onMomentumScrollEnd')}
                    onEndReachedThreshold={10}
                />
                <Text style={styles.heading}>
                    Otros
                </Text>
                <FlatList
                    data={others}
                    renderItem={renderItem}
                    style={{width: '95%', marginLeft:10, alignSelf:'center'}}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    initialNumToRender={5}
                    maxToRenderPerBatch={3}
                    removeClippedSubviews={true}
                    windowSize={5}
                    updateCellsBatchingPeriod={100}
                    onMomentumScrollBegin={() => {
                        console.log('onMomentumScrollBegin')
                        setCallMomentum(false);
                    }}
                    onMomentumScrollEnd={() => console.log('onMomentumScrollEnd')}
                    onEndReachedThreshold={10}
                />
            </Content>
        </Container>
    )
};

export default Home;

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#fff',
        borderBottomWidth:0,
        elevation:0
    },
    title:{
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        width:'100%',
        textAlign:'center'
    },
    heading:{
        fontFamily: 'Montserrat_Bold',
        fontSize: 16,
        marginBottom:10,
        marginTop:10,
        width:'95%',
        alignSelf:'center'
    },
    search:{
        padding:10
    }
})
