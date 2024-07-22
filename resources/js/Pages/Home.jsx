import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="flex flex-col h-screen">
                <Header />
                <main className="flex-1">
                    <MapView />
                </main>
                <footer className="h-1/3">
                    <BottomInfoSection />
                </footer>
            </div>
        </>
    );
}

function Header() {
    const { appName } = usePage().props;

    return (
        <header className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                        <span className="sr-only">Menu</span>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li key="homepage"><a href="#homepage">Homepage</a></li>
                        <li key="portfolio"><a href="#portfolio">Portfolio</a></li>
                        <li key="about"><a href="#about">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="text-xl btn btn-ghost">{appName}</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                    <span className="sr-only">Notifications</span>
                </button>
            </div>
        </header>
    );
}

function MapView() {
    return (
        <Map
            mapboxAccessToken="pk.eyJ1Ijoib24zc3MiLCJhIjoiY2x5d2swcmk5MWhyZzJpcXZ1d2sxNjdsZyJ9.46vRAqRaE8qlDMr6rgVQpw"
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
            }}
            mapStyle="mapbox://styles/on3ss/clywk54h5006y01pc425m170t"
        />
    );
}

function BottomInfoSection() {
    return (
        <section className="h-full p-2 rounded-t-sm bg-neutral">
            <h5>Bottom</h5>
        </section>
    );
}
