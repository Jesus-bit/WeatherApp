import React from 'react'
import '../styles/Loading.css';

export default function Loading() {
  return (
    <article class="container">
      <div class="background">
        <div class="left">
          <div class="image"></div>
          <div class="mask thick"></div>
        </div>
        <div class="right">
          <div class="bar"></div>
          <div class="mask thick"></div>
          <div class="bar"></div>
          <div class="mask thin"></div>
          <div class="bar medium"></div>
          <div class="mask thick"></div>
          <div class="bar small"></div>
        </div>
      </div>
      <div class="background">
        <div class="left">
          <div class="image"></div>
          <div class="mask thick"></div>
        </div>
        <div class="right">
          <div class="bar"></div>
          <div class="mask thick"></div>
          <div class="bar"></div>
          <div class="mask thin"></div>
          <div class="bar medium"></div>
          <div class="mask thick"></div>
          <div class="bar small"></div>
        </div>
      </div>
    </article>
  )
}
