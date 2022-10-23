import StarRatings from "react-star-ratings/build/star-ratings";
import {Component} from "react";





class Foo extends Component {
    changeRating( newRating, name ) {
        this.setState({
            rating: newRating
        });
    }

    render() {
        // rating = 2;
        return (
            <StarRatings
                rating={this.state.rating}
                starRatedColor="blue"
                numberOfStars={5}
                name='rating'
            />
        );
    }
}


// class Bar extends Component {
//     render() {
//         // aggregateRating = 2.35;
//         return (
//             <StarRatings
//                 rating={2.403}
//                 starDimension="40px"
//                 starSpacing="15px"
//             />
//         );
//     }
// }