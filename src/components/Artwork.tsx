import { useState } from 'react';
import '../styles/artwork.scss'
import svgs from '../svgs'

type Props = {
    theme: string;
}

const pottery = [
    {
        alt: "bud vase",
        path: "../artwork/pottery/bud-vase.jpg",
    },
    {
        alt: "side plate",
        path: "../artwork/pottery/side-plate.jpg",
    },
    {
        alt: "tall tea mug",
        path: "../artwork/pottery/tall-mug.jpg",
    }
];

const drawings = [
    {
        alt: "hand",
        path: "../artwork/drawings/hand.jpg",
    },
    {
        alt: "car",
        path: "../artwork/drawings/car.jpg",
    },
    {
        alt: "fruit",
        path: "../artwork/drawings/fruit.jpg",
    },
    {
        alt: "candle",
        path: "../artwork/drawings/candle.jpg",
    },
    {
        alt: "still life",
        path: "../artwork/drawings/still-life.jpg",
    },
    {
        alt: "portrait",
        path: "../artwork/drawings/portrait.jpg",
    }
];

const photography = [
    {
        alt: "Chicago waterfront",
        path: "../artwork/photography/chicago-water.jpg",
    },
    {
        alt: "newspaper closeup",
        path: "../artwork/photography/newspaper.jpg",
    },
    {
        alt: "Boone Hall",
        path: "../artwork/photography/boone.jpg",
    },
    {
        alt: "underground",
        path: "../artwork/photography/underground.jpg",
    },
    {
        alt: "the Chicago Bean",
        path: "../artwork/photography/bean.jpg",
    },
    {
        alt: "london archway",
        path: "../artwork/photography/archway.jpg",
    },
    {
        alt: "closeup of the Chicago Bean",
        path: "../artwork/photography/bean-closeup.jpg",
    },
    {
        alt: "cyclist in northern England",
        path: "../artwork/photography/cyclist.jpg",
    },
    {
        alt: "window cleaner in Chicago",
        path: "../artwork/photography/window-cleaner.jpg",
    },
    {
        alt: "funky wall with mirror tile",
        path: "../artwork/photography/mirror.jpg",
    },
    {
        alt: "walking on path",
        path: "../artwork/photography/walking.jpg",
    },
    {
        alt: "Boston Common",
        path: "../artwork/photography/boston-common.jpg",
    }
];

const graphicDesign = [
    {
        alt: "giraffe",
        path: "../artwork/graphic-design/giraffe.jpg",
    },
    {
        alt: "ice age horror movie poster",
        path: "../artwork/graphic-design/ice-age.jpg",
    },
    {
        alt: "carrots",
        path: "../artwork/graphic-design/carrots.jpg",
    },
    {
        alt: "empathetic portrait",
        path: "../artwork/graphic-design/ben.jpg",
    }
];


const Artwork: React.FC<Props> = ({theme}) => {

    const [potteryIdx, setPotteryIdx] = useState(0);
    const [drawingIdx, setDrawingIdx] = useState(0);
    const [photographyIdx, setPhotographyIdx] = useState(0);
    const [graphicDesignIdx, setGraphicDesignIdx] = useState(0);

    const potteryPrev = () => {
        if (potteryIdx > 0) {
            setPotteryIdx(potteryIdx-1);
        } else {
            setPotteryIdx(2);
        }
    }

    const potteryNext = () => {
        if (potteryIdx < 2) {
            setPotteryIdx(potteryIdx+1);
        } else {
            setPotteryIdx(0);
        }
    }

    const drawingPrev = () => {
        if (drawingIdx > 0) {
            setDrawingIdx(drawingIdx-1);
        } else {
            setDrawingIdx(5);
        }
    }

    const drawingNext = () => {
        if (drawingIdx < 5) {
            setDrawingIdx(drawingIdx+1);
        } else {
            setDrawingIdx(0);
        }
    }

    const photographyPrev = () => {
        if (photographyIdx > 0) {
            setPhotographyIdx(photographyIdx-1);
        } else {
            setPhotographyIdx(11);
        }
    }

    const photographyNext = () => {
        if (photographyIdx < 11) {
            setPhotographyIdx(photographyIdx+1);
        } else {
            setPhotographyIdx(0);
        }
    }

    const graphicDesignPrev = () => {
        if (graphicDesignIdx > 0) {
            setGraphicDesignIdx(graphicDesignIdx-1);
        } else {
            setGraphicDesignIdx(3);
        }
    }

    const graphicDesignNext = () => {
        if (graphicDesignIdx < 3) {
            setGraphicDesignIdx(graphicDesignIdx+1);
        } else {
            setGraphicDesignIdx(0);
        }
    }

    return (
        <div className={theme}>
            <div className="artwork-container" id="artwork">
                <div className="header-container">
                    <h2>ARTWORK 🎨</h2>
                    <h3>check out some of my artwork!</h3>
                </div>
                <div className="content-container">
                    <div className="art-tile">
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#962D23"}}>animation</h4>
                            <p>I designed, painted, and edited an animated film showcasing a fictional chef's daily life. I worked on the piece extensively over the course of two months and produced my favourite piece.</p>
                        </div>
                        <div className="artwork">
                            <video poster="../artwork/animations/allessiothumbnail.png" controls>
                                <source src="../artwork/animations/allessio.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="artwork">
                            <button onClick={potteryPrev}
                                dangerouslySetInnerHTML={{__html: svgs.leftarrow}}>
                            </button>
                            <div className="slideshow">
                                <img src={pottery[potteryIdx].path} alt={pottery[potteryIdx].alt} />
                            </div>
                            <button onClick={potteryNext}
                                dangerouslySetInnerHTML={{__html: svgs.rightarrow}}>
                            </button>
                        </div>
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#B0A68A"}}>pottery</h4>
                            <p>I honed wheel throwing for five months, crafting functional pottery. The art of turning what was once mud into delicate, lightweight pieces resonated with me, furthering my appreciation for this craft.</p>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#5B6384"}}>oil painting</h4>
                            <p>For a final project, I tried oil painting for the first time. It resulted in this 3ft by 3ft canvas, <i>Pebbles & Piers</i>, which is a portrayal of Brighton beach in my English hometown.</p>
                        </div>
                        <div className="artwork">
                            <img src="../artwork/paintings/oil-painting.jpg" alt="pebbles & piers oil painting" />
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="artwork">
                            <button onClick={drawingPrev}
                                dangerouslySetInnerHTML={{__html: svgs.leftarrow}}>
                            </button>
                            <div className="slideshow">
                                <img src={drawings[drawingIdx].path} alt={drawings[drawingIdx].alt} />
                            </div>
                            <button onClick={drawingNext}
                                dangerouslySetInnerHTML={{__html: svgs.rightarrow}}>
                            </button>
                        </div>
                        <div className="blurb">
                            <h4>drawings</h4>
                            <p>Ever since I was young, I've kept sketch books that I would draw in from time to time. It's always been my favourite medium because of its simplicity. To the left are various I've done over the years.</p>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#1E5A68"}}>photography</h4>
                            <p>Photography is a medium that I've indulged in sporadically over the years. I've always enjoyed the act of capturing moments in a certain light. Having recently got a camera as well, I feel inspired to explore photography more.</p>
                        </div>
                        <div className="artwork">
                            <button onClick={photographyPrev}
                                dangerouslySetInnerHTML={{__html: svgs.leftarrow}}>
                            </button>
                            <div className="slideshow">
                                <img src={photography[photographyIdx].path} alt={photography[photographyIdx].alt} />
                            </div>
                            <button onClick={photographyNext}
                                dangerouslySetInnerHTML={{__html: svgs.rightarrow}}>
                            </button>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="artwork">
                            <button onClick={graphicDesignPrev}
                                dangerouslySetInnerHTML={{__html: svgs.leftarrow}}>
                            </button>
                            <div className="slideshow">
                                <img src={graphicDesign[graphicDesignIdx].path} alt={graphicDesign[graphicDesignIdx].alt} />
                            </div>
                            <button onClick={graphicDesignNext}
                                dangerouslySetInnerHTML={{__html: svgs.rightarrow}}>
                            </button>
                        </div>
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#C5AE72"}}>graphic design</h4>
                            <p>Over the course of a few months, I learned and became adversed in Adobe Photoshop and Illustrator, creating various graphic design images.</p>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#65432D"}}>3-d animation</h4>
                            <p>After making some digital art in graphic design and hand-drawn animations, I wanted to combine the two. I learned the ropes of the powerful software <i>Blender</i>, and created this doughnut clip.</p>
                        </div>
                        <div className="artwork">
                            <video poster="../artwork/animations/doughnutthumbnail.png" controls>
                                <source src="../artwork/animations/doughnut.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artwork;
