import React, { Component } from 'react';

export default class Details extends Component {
    render() {
        return (
            <div class="content">
                <div class="info">
                    <div class="col">
                        <span class="avatar">&#9787;</span>
                    </div>
                    <div class="col">
                        <span class="name">{this.props.firstName}</span>
                        <span class="name">{this.props.lastName}</span>
                    </div>
                </div>
                <div class="info">
                    <span class="info-line">&phone; {this.props.phone}</span>
                    <span class="info-line">&#9993; {this.props.email}</span>
                </div>
            </div>
        )
    }
}