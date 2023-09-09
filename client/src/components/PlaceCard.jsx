import React, { useEffect, useState } from 'react';
import instance from '../constants/axios';

function PlaceCard() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get('/getPlaces');
                setPlaces(response.data);
                console.log(response);
            } catch (error) {
                alert(error);
            }
        };
        fetchData();
    }, []);
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center">
                <h2 className="my-9 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Top 10 Places to explore in India
                </h2>
                <h3 className="font-medium w-2/3 dark:text-white">
                    Delve into the heart of India through our handpicked selection of the nation's top 10 cities. From
                    historical treasures to modern marvels, discover the essence of India in these urban gems. Join us on
                    this captivating journey now!
                </h3>
            </div>
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                {places.map((place, index) => (
                    <>
                        <img className="w-full dark:hidden" src={place.image} alt="dashboard " />
                        <img className="w-full hidden dark:block" src={place.image} alt="dashboard " />
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                {`${index + 1}. ${place.name}, ${place.district}`}
                            </h2>
                            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                                {place.description}
                            </p>
                        </div>
                    </>
                ))}
            </div>
        </section>
    );
}

export default PlaceCard;
