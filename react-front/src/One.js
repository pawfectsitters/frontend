import React, { Component } from 'react';

function One(props) {
   return (
    <section id="one" className="wrapper">
				<div className="inner">
					<div className="flex flex-3">
						<article>
							<header>
								<h3>Cats</h3>
							</header>
							<p>We will visit your cat at home, feed it, refill its water bowl, clean its litter box, play with it and give it a big cuddle (if it wants one).<br />Our rates: 50 dirhams a day. <br />Discounts for multiple pet households.</p>
						</article>
						<article>
							<header>
								<h3>Dogs</h3>
							</header>
							<p>We will visit your dog, bring it for a walk or two, play with it, clean up after it, feed it and refill its water bowl.<br />Our rates: 80 dirhams a day.<br />Discounts for multiple pet households.</p>
						</article>
						<article>
							<header>
								<h3>Other domestic pets</h3>
							</header>
							<p>We can take care of small animals such as hamsters, guinea pigs and rabbits. We can also handle small to medium sized birds. But no birds of prey please!<br />Our rates: 50 dirhams a day. <br />Discounts for multiple pet households.</p>
						</article>
					</div>
				</div>
			</section>
   );
}

export default One;