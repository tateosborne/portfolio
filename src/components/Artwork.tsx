import '../styles/artwork.scss'
import svgs from '../svgs'

function Artwork() {

    return (
        <div className="light-theme">
            <div className="artwork-container" id="artwork">
                <div className="header-container">
                    <h2>ARTWORK 🎨</h2>
                    <h3>check out some of my artwork!</h3>
                </div>
                <div className="content-container">
                    <div className="art-tile">
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#962D23"}}>animation</h4>
                            <p>I drew, created, and edited animated film showcasing a fictional chef's daily life. I worked on the piece extensively over the course of two months.</p>
                        </div>
                        <div className="artwork">
                            <video poster="../allessiothumbnail.png" controls>
                                <source src="../artwork/allessio.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="artwork">
                            <img src="../artwork/oilpainting.jpg" alt="pebbles & piers oil painting" />
                        </div>
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#5B6384"}}>oil painting</h4>
                            <p>For a final project, I tried oil painting for the first time. It resulted in this 3ft by 3ft canvas, <i>Pebbles & Piers</i>, which is a portrayal of Brighton beach in my English hometown.</p>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="blurb">
                            <h4>pottery</h4>
                            <p>I honed wheel throwing for five months, crafting functional pottery. The art of creating delicate, lightweight pieces resonated with me, furthering my appreciation for this craft.</p>
                        </div>
                        <div className="artwork">
                            <img src="../project-images/placeholder.png" alt="" />
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="artwork">
                            <img src="../artwork/giraffe.jpg" alt="giraffe graphic design" />
                        </div>
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#C5AE72"}}>graphic design</h4>
                            <p>Over the course of a few months, I learned and became adversed in Adobe Photoshop and Illustrator, creating various graphic design images.</p>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="blurb">
                            <h4 style={{textDecorationColor: "#65432D"}}>3-dimensional animation</h4>
                            <p>After making some digital art in graphic design and manual animations, I wanted to blend the two. I learned the ropes of the powerful software <i>Blender</i>, and created this doughnut clip.</p>
                        </div>
                        <div className="artwork">
                            <video poster="../doughnutthumbnail.png" controls>
                                <source src="../artwork/doughnut.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="art-tile">
                        <div className="artwork">
                            <img src="../project-images/placeholder.png" alt="" />
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
