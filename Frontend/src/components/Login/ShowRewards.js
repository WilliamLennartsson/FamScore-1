import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { showAddReward } from '../../actions';
import AddReward from '../AddReward/AddReward';
import AddCard from '../MainMenu/AddCard';
import RewardCard from '../RewardCard/RewardCard';

class ShowRewards extends Component {
    componentWillUpdate() {
        //LayoutAnimation.spring()
    }

    renderAddCard() {
        console.log('isAdmin in renderAddCard: ', this.props.isAdmin);
        
        if (this.props.isAdmin) {
            return <AddCard onPress={this.props.showAddReward} />
        }
    }

    renderRewards() {
        return this.props.rewardsList.map((item, index) => 
            <RewardCard 
                key={index} 
                titleText={item.titleText}
                infoText={item.infoText}
                points={item.points} 
            />
        )
    }

    render() {
        return (
            <View style={[styles.viewStyle, this.props.visible ? { opacity: 0.3 } : '']} >

                <ScrollView style={styles.scrollViewStyle}>

                    {this.renderAddCard()}
                    
                    {this.renderRewards()}

                    <AddReward />

                    <View style={{ height: 20, opacity: 0 }} />

                </ScrollView>

            </View>
        )
    }
}

const mapStateToProps = ({ rewardsReducer }) => {
    const { rewardsList, visible, isAdmin } = rewardsReducer

    return { rewardsList, visible, isAdmin }
}

export default connect(mapStateToProps, { showAddReward })(ShowRewards)

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    scrollViewStyle: {
        backgroundColor: '#f4f9f4'
    }
})
