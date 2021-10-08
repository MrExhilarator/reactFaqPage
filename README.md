### Refer to the image below:

<details>
<summary>Click to view</summary>
  
<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/faqs-output-v3.gif" alt="faqs-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)" />
</div>
<br/>

</details>
  
### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px), Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/faqs-sm-output-v2.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/faqs-lg-output-v2.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Functionalities

<details>
<summary>Click to view</summary>
<br/>

The app has the following functionalities

- When the plus icon is clicked in a FAQ
  - The answer to the FAQ will be visible to the user
  - The plus icon will change to a minus icon
- When the minus icon is clicked in a FAQ
  - The answer to the FAQ will be hidden to the user
  - The minus icon will change to a plus icon
- The `Faqs` component receives the `faqsList` as a prop. It consists of a list of faq objects with the following properties in each faq object

  |     Key      | Data Type |
  | :----------: | :-------: |
  |      id      |  Number   |
  | questionText |  String   |
  |  answerText  |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/faqs-component-structure-breakdown.png" alt="faqs-component-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

### Salient Styling

<details>
<summary>Click to view</summary>
<br>

- Used the `box-shadow` CSS property to apply the box-shadow effect to containers

  ```
    box-shadow: 0px 4px 16px 0px #bfbfbf;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/box-shadow-img.png" alt="box shadow" style="width:200px" />

- Used the `cursor` CSS property to specify the mouse cursor to be displayed when pointing over an element

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png](https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png)
- [https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png](https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #cb8805; width: 150px; padding: 10px; color: white">Hex: #cb8805</div>
<div style="background-color: #52606d; width: 150px; padding: 10px; color: white">Hex: #52606d</div>
<div style="background-color: #9aa5b1; width: 150px; padding: 10px; color: white">Hex: #9aa5b1</div>

#### Border Colors

<div style="background-color: #d7dae6; width: 150px; padding: 10px; color: black">Hex: #d7dae6</div>
<div style="background-color: #e4e7eb; width: 150px; padding: 10px; color: black">Hex: #e4e7eb</div>

#### Background Colors

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #f1f5f8; width: 150px; padding: 10px; color: black">Hex: #f1f5f8</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
