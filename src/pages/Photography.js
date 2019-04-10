
import React, {Component} from 'react';
import NavigationBar from './NavigationBar'
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import img1 from '../photos/1.JPG'
import img2 from '../photos/2.jpg'
import img3 from '../photos/3.JPG'
import img4 from '../photos/4.JPG'
import img5 from '../photos/5.JPG'
import img6 from '../photos/6.JPG'


const photos = [
    { src: img1, width: 4, height: 3 },
    { src: img3, width: 4, height: 3 },
    { src: img5, width: 4, height: 3 },
    { src: img6, width: 2, height: 3 },
    { src: img2, width: 4, height: 3 },
    { src: img4, width: 2, height: 3 },
  ];

export default class PhotographyScreen extends Component{
    state = {
        showPhotography: true
    }

    openLightbox = (event, obj) => {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
    }

    closeLightbox = () => {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
    }

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }


    render () {
        const { showPhotography } = this.state
        return (
            <div>
                <NavigationBar photography={showPhotography}/>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </div>
        )
    }
}