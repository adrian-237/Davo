import React from 'react';

class TransportOptions extends React.Component {
    render() {
        const {id, image, title, description} = this.props;
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-56 object-cover col-span-1"
                    />
                    <div className="p-6 col-span-1">
                        <h1 className="text-2xl font-bold text-blue-900 mb-4 uppercase text-5xl lg:6xl font-bold font-body">
                            {title}
                        </h1>
                    </div>
                    <div className="col-span-1">
                        <p className="text-gray-600 mb-6 line-clamp-4">
                            {description}
                        </p>
                        <button
                            className={'w-full py-3 text-white font-bold rounded-lg bg-accent hover:opacity-90 transition-colors'}
                        >
                            REZERVĂ LOC
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TransportOptions;