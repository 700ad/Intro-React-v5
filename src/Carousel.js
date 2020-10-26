import React from 'react';

class Carousel extends React.Component {
    state = {
        photo: [],
        active: 0
    };
    static getDerivedStateFromProps({ media }) {
        let photos = ['https://placecorgi.com/600/600']
        if (media.length) {
            photos = media.map(({ large }) => large);
        }
        return { photos };
    }
    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index
        })
    }
    render() {
        const { photos, active } = this.state;

        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {this.props.media.map((photo, index) => (
                        <img
                            onClick={this.handleIndexClick}
                            data-index={index}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                            key={photo} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;