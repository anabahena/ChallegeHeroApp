import React, {useContext, useState} from 'react';
import {Content, Container, Header, Left, Body, Button} from "native-base";
import {FlatList, StatusBar, Text, StyleSheet, useColorScheme} from 'react-native';
import Card from "../../components/Card";
import {useTheme} from "@react-navigation/native";
import {FontAwesome} from '@expo/vector-icons';
import Context from "../../components/App/Context";

const Home = ({navigation}) => {
    const {data, setData} = useContext(Context),
        [loading, setLoading] = useState(false),
        {colors} = useTheme(),
        scheme = useColorScheme(),
        [callMomentum, setCallMomentum] = useState(false);


    const renderItem = ({item}) => {
        return (
            <Card item={item} navigation={navigation}/>
        )
    }

    const humans = data && data.filter(item => item.appearance.race === 'Human'),
        cosmicEntity = data && data.filter(item => item.appearance.race === 'Cosmic Entity'),
        humanRadiation = data && data.filter(item => item.appearance.race === 'Human / Radiation'),
        others = data && data.filter(item => item.appearance.race === null),
        cyborg = data && data.filter(item => item.appearance.race === 'Cyborg'),
        android = data && data.filter(item => item.appearance.race === 'Android'),
        mutant = data && data.filter(item => item.appearance.race === 'Mutant');


    return (
        <Container style={{backgroundColor: colors.background}}>
            <Header style={[styles.header, {backgroundColor: colors.background}]}>
                <Body style={{
                    flex: 1
                }}>
                    <Text style={[styles.title, {color: colors.secondary}]}>
                        HeroApp
                    </Text>
                </Body>
                <Left style={{flex: 0}}>
                    <Button transparent style={styles.search} onPress={() => navigation.navigate('Search')}>
                        <FontAwesome name="search" size={24} color="black"/>
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
                    style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
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
                    style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
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
                    style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
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
                    style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
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
                    style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
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
                    style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
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
                    style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
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
    header: {
        backgroundColor: '#fff',
        borderBottomWidth: 0,
        elevation: 0
    },
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        width: '100%',
        textAlign: 'center'
    },
    heading: {
        fontFamily: 'Montserrat_Bold',
        fontSize: 16,
        marginBottom: 10,
        marginTop: 10,
        width: '95%',
        alignSelf: 'center'
    },
    search: {
        padding: 10
    }
})
