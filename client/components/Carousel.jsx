import React, {useState} from 'react';
import './styles.scss';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const Title = styled.h1`
  font-size: 1.5em;
  border: none;
  margin: 0;
  padding: 10px;
`;

const Button = styled.button`
  border: 1px solid lightgrey;
  background-color: rgb(236, 235, 235);
  outline: none;
  color: grey;
`;

const Name = styled.p`
  font-size: 14px;
  &:hover {
    text-decoration: underline
  }
  text-align: left;
`;

const Cost = styled.span`
  color: #C90B0B;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
`;

const Count = styled.span`
  font-size: 12px;
  margin: 5px;
`

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    }
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
  }
  // sets the state for left button click
  left() {
    this.state.x === 0 ? this.setState({x: 0}) : this.setState({x: this.state.x + 200});
  };
  // sets the state for right button click
  right(){
    this.state.x === -600 ? this.setState({x: 0}) : this.setState({x: this.state.x - 200});
  };

  render() {
    return (
      <div className = "carousel">
        <div className = "title">
          <Title>Customers Who Viewed This Item Ultimately Bought</Title>
        </div>
        {
          this.props.data.map((item, index) => {
            if (item.id > 20 && item.id < 32) {
              return(
                <div key={index} className="slide" style={{transform: `translateX(${this.state.x}%)`}}>
                  <div className="information">
                    <img src={item.imageUrl} clasName= "image"></img>
                    <div className="bottom">
                      <div className="hover">Quickview</div>
                    </div>
                    <Name>{item.name}</Name>
                    <Cost>${item.cost}.99</Cost>
                    <p>
                      <StarRatings
                        rating= {item.ratings}
                        starRatedColor= '#F0DD60'
                        numberOfStars={5}
                        name='rating'
                        starDimension= "15px"
                        starSpacing= "2px"
                        />
                        <Count>({item.reviewsCount})</Count>
                    </p>
                  </div>
                </div>
              )
            }
          })
        }

      <Button id="left" onClick={this.left}><i class="fas fa-chevron-left fa-2x"></i></Button>
      <Button id="right" onClick={this.right}><i class="fas fa-chevron-right fa-2x"></i></Button>
      </div>
    )
  }
}

export default Carousel;