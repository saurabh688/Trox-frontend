import React, { useEffect, useState } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import './BannerSlider.css';

const data = [
    {
        id: 1,
        name: 'banner_image_1',
        image: require('../../assets/banner_image/banner_image_1.jpg')
    },
    {
        id: 2,
        name: 'banner_image_2',
        image: require('../../assets/banner_image/banner_image_2.jpg')
    },
    {
        id: 3,
        name: 'banner_image_3',
        image: require('../../assets/banner_image/banner_image_3.jpg')
    },
    {
        id: 4,
        name: 'banner_image_4',
        image: require('../../assets/banner_image/banner_image_4.jpg')
    }
]

const BannerSlider = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    const checkIndex = (i) => {
        if (i < 0) {
            return people.length - 1;
        }
        if (i > people.length - 1) {
            return 0;
        }
        return i;
    }

    const prevButton = () => {
        setIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return checkIndex(newIndex);
        })
    }

    const nextButton = () => {
        setIndex((nextIndex) => {
            const newIndex = nextIndex + 1;
            return checkIndex(newIndex);
        })
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(checkIndex(index + 1))
        }, 4000);
        return () => clearInterval(slider);
    }, [index])

    return (
            <div className="section-center">
                {
                    people.map((person, personIndex) => {
                        const { id, name, image } = person;
                        let position = 'nextSlide'
                        if (personIndex === index) {
                            position = 'activeSlide';
                        }
                        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                            position = 'lastSlide';
                        }
                        return (
                            <article key={id} className={position}>
                                <img src={image} alt={name} className='person-img' />
                            </article>
                        );
                    })
                }
                <button className='prev' onClick={prevButton}>
                    <FiChevronLeft />
                </button>
                <button className='next' onClick={nextButton}>
                    <FiChevronRight />
                </button>
            </div>
    );
}

export default BannerSlider;