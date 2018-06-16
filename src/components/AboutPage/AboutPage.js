import React, { Component } from "react"

import "./AboutPage.css"

class AboutPage extends Component {
    render() {
        return (
            <div className="about-page">
                <div className="about-page__container">
                    <div className="about-page__close">
                        <a href="/">
                            <p>x</p>
                        </a>
                    </div>
                    <div className="about-page__content">
                        <h1>about kira</h1>
                        <p>Ki Ra (Kira Zhigalina) was born in Moscow, lives and works in London, UK. She works across mediums including film, video, sound, installation, and holographic projection. She has created installations and visual projections for Secret Cinema, London Contemporary Orchestra, London Zoo, Musion Holographic Systems, Tate Modern, onedotzero, Vivienne Westwood show, The Leaf Label, Fruit for the Apocalypse, Unfashion Show, and the Rambert Dance Company, among others.</p>
                        <p>Her work is sensual and organic, examining subconscious and conscious appreciation of forms, and visualising the space in between, where archetypes feed into representations. Her intention is to create a visual language and immersive experience that can communicate on emotional and subconscious levels.</p>
                        <p>Ki Ra won the Kinetica Award 2012, and Award for Performance at MAMAs 2010, and was  in the top ten nominees for the Randstad Gold VJ Award in 2010.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage
