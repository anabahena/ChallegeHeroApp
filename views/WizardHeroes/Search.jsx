import React, {useCallback, useEffect, useState} from 'react';
import {Content, Container, Header, Left, Button, Body, Input, Item} from "native-base";
import {Entypo} from "@expo/vector-icons";
import {Text, useColorScheme, StyleSheet, FlatList} from "react-native";
import {useTheme} from "@react-navigation/native";
import methods from "../methods";
import {SearchBar} from "react-native-elements";
import Card from "../../components/Card";

const Search = ({route, navigation}) => {
    const [query, setQuery] = useState(''),
        [loading, setLoading] = useState(false),
        [heroes, setHeroes] = useState([]),
        {colors} = useTheme(),
        scheme = useColorScheme();

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

    const filter = (query) => {
        const newData = heroes.filter((item) => {
            const itemData = item.name.toUpperCase()
            const textData = query.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setHeroes(newData)
    };


    useEffect(() => {
        filter(query);
        if (query === '') {
            getHeroes();
        }

    }, [query]);

    console.log(heroes)

    const renderItem = ({item}) => {
        return (
            <Card item={item} navigation={navigation}/>
        )
    }

    return (
        <Container>
            <Header style={[styles.header, {backgroundColor: colors.background}]}>
                <Left style={{
                    flex: 0
                }}>
                    <Button transparent style={styles.search} onPress={() => navigation.navigate('Home')}>
                        <Entypo name="chevron-left" size={24} color="black"/>
                    </Button>
                </Left>
                <Body style={{
                    flex: 1
                }}>
                    <Text style={[styles.title, {color: colors.secondary}]}>
                        Búsqueda
                    </Text>
                </Body>
            </Header>
            <Content>
                <SearchBar
                    placeholder="Search hero"
                    onChangeText={(text) => setQuery(text)}
                    value={query}
                    containerStyle={{
                        backgroundColor: '#99CCCC', width: '95%', alignSelf: 'center', borderTopWidth: 0,
                        borderBottomWidth: 0, borderRadius: 8, marginBottom: 20
                    }}
                    inputContainerStyle={{backgroundColor: '#fff'}}
                />
                <FlatList
                    data={heroes}
                    renderItem={renderItem}
                    style={{width: '95%', marginLeft: 10, alignSelf: 'center'}}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}
                    //getItemLayout={getItemLayout}
                    initialNumToRender={5}
                    maxToRenderPerBatch={3}
                    removeClippedSubviews={true}
                    windowSize={5}
                    updateCellsBatchingPeriod={100}
                    onMomentumScrollBegin={() => {
                        console.log('onMomentumScrollBegin')
                        //setCallMomentum(false);
                    }}
                    onMomentumScrollEnd={() => console.log('onMomentumScrollEnd')}
                    onEndReachedThreshold={10}
                    //onEndReached={onEndReached}
                />
            </Content>
        </Container>
    )
}

export default Search;

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
    item: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 8
    }
})
