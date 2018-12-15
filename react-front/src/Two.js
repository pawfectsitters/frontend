import React, { Component } from 'react';

function Two(props) {
   return (
    <section id="two" className="wrapper style1 special">
    <div className="inner">
        <header className="align-center">
            <h2>Find a petsitter</h2>
            <p>We have 15 highly skilled and trained petsitters in our database. <br />All our petsitters are animal lovers and will do anything to make your pets comfortable and happy while in their care.</p>
        </header>
        <div className="flex flex-2">
            <article>
                <div className="image fit">
                    <img src="images/pic01.jpg" alt="Pic 01" />
                </div>
                <header>
                    <h3>Zac Rodrigues</h3>
                </header>
                <p>Zac has over 10 years of experience in handling both domestic and wild animals. He is a wildlife researcher at the Dubai Food and Agricultural Organization and is working on a research paper on the behaviour of domesticated pets in the Middle East. He enjoys petsitting assignments in his spare time and lives with two rescue dogs and a broken-winged macaw.</p>					
            </article>
            <article>
                <div className="image fit">
                    <img src="images/pic02.jpg" alt="Pic 02" />
                </div>
                <header>
                    <h3>Sharifa Khan</h3>
                </header>
                <p>Sharifa has over five years of experience in animal care having been a marine biologist in her earlier career. She is now an android mobile developer and fulfils her desire to be around animals through freelance petsitting assignments. She lives with her pet cat and dog and looks forward to petsitting projects that come her way.</p>
            </article>
        </div>
    </div>
</section>
   );
}

export default Two;