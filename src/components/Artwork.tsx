import { useState } from 'react';
import '../styles/artwork.scss'
import svgs from '../svgs'

type Props = {
    theme: string;
}

const pottery = [
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
    },
];

const photography = [
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
    },
]

const Artwork: React.FC<Props> = ({theme}) => {

    const [graphicDesignIdx, setGraphicDesignIdx] = useState(0);
    const [drawingIdx, setDrawingIdx] = useState(0);

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
                            <p>I designed, painted, and edited an animated film showcasing a fictional chef's daily life. I worked on the piece extensively over the course of two months.</p>
                        </div>
                        <div className="artwork">
                            <video poster="../allessiothumbnail.png" controls>
                                <source src="../artwork/animations/allessio.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="artwork">
                            <img src="../artwork/paintings/oil-painting.jpg" alt="pebbles & piers oil painting" />
                        </div>
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#5B6384"}}>oil painting</h4>
                            <p>For a final project, I tried oil painting for the first time. It resulted in this 3ft by 3ft canvas, <i>Pebbles & Piers</i>, which is a portrayal of Brighton beach in my English hometown.</p>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="blurb">
                            <h4>pottery</h4>
                            <p>I honed wheel throwing for five months, crafting functional pottery. The art of turning what was once mud into delicate, lightweight pieces resonated with me, furthering my appreciation for this craft.</p>
                        </div>
                        <div className="artwork">
                            <img src="../project-images/placeholder.png" alt="" />
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="artwork">
                            <button onClick={graphicDesignPrev}
                                dangerouslySetInnerHTML={{__html: svgs.leftarrow}}>
                            </button>
                            <img src={graphicDesign[graphicDesignIdx].path} alt={graphicDesign[graphicDesignIdx].alt} />
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
                            <h4 style={{textDecorationColor: "#65432D"}}>3-dimensional animation</h4>
                            <p>After making some digital art in graphic design and hand-drawn animations, I wanted to combine the two. I learned the ropes of the powerful software <i>Blender</i>, and created this doughnut clip.</p>
                        </div>
                        <div className="artwork">
                            <video poster="../doughnutthumbnail.png" controls>
                                <source src="../artwork/animations/doughnut.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="artwork">
                            <button onClick={drawingPrev}
                                dangerouslySetInnerHTML={{__html: svgs.leftarrow}}>
                            </button>
                            <img src={drawings[drawingIdx].path} alt={drawings[drawingIdx].alt} />
                            <button onClick={drawingNext}
                                dangerouslySetInnerHTML={{__html: svgs.rightarrow}}>
                            </button>
                        </div>
                        <div className="blurb">
                            <h4>drawings</h4>
                            <p>Ever since I was young, I've kept sketch books that I would draw in from time to time. It's always been my favourite medium because of its simplicity. To the left are various I've done over the years.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artwork;
