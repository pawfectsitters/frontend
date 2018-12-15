import React, { Component } from 'react';

function Three(props) {
   return (
    <section id="three" className="wrapper special">
    <div className="inner">
        <header>
            <h2>Feedback from our happy customers</h2>
        </header>
        <div className="flex flex-4">
            <div className="box person">
                <div className="image round">
                    <img src="images/pic03.jpg" alt="Person 1" />
                </div>
                <h3>Bethany</h3>
                <p>I highly recommend PawFect Sitters! My two dogs (Laura and Hachi) received a lot of love and care by the sitter while I was away for almost two months. I was even updated with daily pictures of the dogs. PawFect Sitters provide meticulous, honest and affordable pet sitting services. I can't wait to utilize the services again during my next trip!!
                </p>
            </div>
            <div className="box person">
                <div className="image round">
                    <img src="images/pic04.jpg" alt="Person 2" />
                </div>
                <h3>Rufus</h3>
                <p>I was desperately seeking someone to look after my cat Zoe when I go for long business trips. I did some research and found PawFect Sitters. I was very impressed with the detailed reports and services and now I can always leave with the comforting knowledge that the great team at PawFect Sitters will take care of Zoe, including scratching behind her ears.</p>
            </div>
            <div className="box person">
                <div className="image round">
                    <img src="images/pic05.jpg" alt="Person 3" />
                    
                </div>
                <h3>Seow Mei</h3>
                <p>I’m so thankful to PawFect Sitters. They have always been there for us. I’ve never been able to go on a long vacation before because I have two pet birds at home. But now I can go on vacation knowing that my pet birds are in safe and loving hands. My birds are really getting along with the pet sitters! I can now go on my next vacation without any worries. Thank you PawFect Sitters. You're the best!
                </p>
            </div>
            <div className="box person">
                <div className="image round">
                    <img src="images/pic06.jpg" alt="Person 4" />
                </div>
                <h3>Pierre</h3>
                <p>PawFect Sitters changed my life! I have two dogs at home that need a lot of care. Before I found this company I was running back and forth between work and home on my lunch breaks but now I can relax knowing that my dogs are in safe hands with PawFect Sitters! They are the best petsitting service I’ve ever tried in Dubai! They have well trained staff, they are always on time and they offer good prices.</p>
            </div>
        </div>
    </div>
    <img src="images/favicon.jpg" alt="PawFect Sitters" align="center" />
</section>
   );
}

export default Three;