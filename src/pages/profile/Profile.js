import React from 'react'
import Navbar from '../../components/Navbar';
import { Icon } from 'semantic-ui-react';
import '../../styles/Profile.css';
import 'semantic-ui-css/semantic.min.css'

function Profile() {
    return (
        <div>
            <Navbar />
            <div className="profile">
                <div className="profile__header">
                    <div className="profile__header__photo">
                        photo here
                    </div>
                    <div className="profile__header__statistics">
                        <div className="profile__header__statistics__elem">
                            <p><Icon name="user outline" /> Name:</p>
                            <p><b>Dejgon</b></p>
                        </div>
                        <div className="profile__header__statistics__elem">
                            <p><Icon name="calendar outline" /> Joined:</p>
                            <p><b>2020-02-20</b></p>
                        </div>
                        <div className="profile__header__statistics__elem">
                            <p><Icon name="coffee" /> Own recipes:</p>
                            <p><b>2</b></p>
                        </div>
                        <div className="profile__header__statistics__elem">
                            <p><Icon name="like" /> In favorites:</p>
                            <p><b>5</b></p>
                        </div>
                    </div>
                </div>
                <div className="profile__content">
                <h2>Most viewed recipes:</h2>
                    <div className="profile__content__elem">
                        <div className="profile__content__elem__image">
                            image here
                        </div>
                        <div className="profile__content__elem__desc">
                            <h1>Recipe name</h1>
                            <p>Recipe content</p>
                            <button>Go to recipe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
