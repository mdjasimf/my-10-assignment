import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>
            <h1>Difference between authorization and authentication</h1>
            <p>authorization means determining which employee has access to which floor.<br />
                on the other hand, authentication verifiesand confirms employees id and passwords in an organization.
            </p>
            <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>
                1.Why are you using firebase?<br />
                Ans:Firebase manages everything in database.
                It can be used for rapid development.<br />
                2.What other options do you have to implement authentication?<br />
                ans: without firebase , we have other options to implement authentication which are web authentication, http authentication ,react firebase hooks etc.
            </p>
            <h1>What other services does firebase provide other than authentication</h1>
            <p>firebase provides others services than authentication which are:<br />
                1.Cloud messaging<br />
                2.Cloud firestone<br />
                3.Cloud functions<br />
                4.Hosting<br />
                5.Google analytics<br />
                6.predictions
            </p>
        </div>
    );
};

export default Blogs;