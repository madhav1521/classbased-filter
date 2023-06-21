import React, { Component } from 'react'
import Header from './Header';

interface stateProps {
    products: string[];
    searchData: string;
}
export default class Products extends Component<stateProps> {
    constructor() {
        super();
        this.state = {
            searchData: '',  // Store the search query
            products: [],    // Store the fetched products
            filteredProducts: [],  // Store the filtered products based on the search query
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b8820f0f1ea74c07a5a0a8bf0a6e2f7a')
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data, filteredProducts: data });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }

    handleSearchChange = (event: { target: { value: any; }; }) => {
        const searchQuery = event.target.value;
        this.setState({ searchData: searchQuery }, () => {
            this.filterProducts();
        });
    };

    filterProducts = () => {
        const { products, searchData } = this.state;
        const filteredProducts = products.filter((product: { name: string; }) =>
            product.name.toLowerCase().includes(searchData.toLowerCase())
        );
        this.setState({ filteredProducts });
    };

    render() {
        const { filteredProducts } = this.state;
        return (
            <div>
                {/* <Header value={this.state} onChange={this.handleSearchChange} /> */}
                <h2>Products</h2>
                {filteredProducts.map((value: any) =>
                (
                    <>
                        <div className='rows'>
                            <div ><img className='img-col' src={value.urlToImage} alt='' /></div>
                            <div className='columns'>{value.author}</div>
                            <div className='columns'>{value.title}</div>
                        </div>
                    </>
                )
                )}
            </div>
        )
    }
}
