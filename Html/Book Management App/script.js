/*let arrBooks = [];
function add() {
    let id = document.getElementById("bookid").value;
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("bookauthor").value;
    let price = document.getElementById("bookprice").value;
    let image = document.getElementById("bookimage").value;
    if (validate(id,name,author,price,image)) {
      alert("Validation ok");
      let book = {
        Id:id,
        Name: name,
        Author:author,
        Price:price,
        Image:image,
      };
      arrBooks = JSON.parse(localStorage.getItem("books"));
      arrBooks = arrBooks == null ? [] : arrBooks;
      arrBooks.push(book);
      localStorage.setItem("books", JSON.stringify(arrBooks));
  
      BindTable();
    }

    }


function BindTable(){
    let books = JSON.parse(localStorage.getItem("books"));
    alert(books);
  let data = "";
  if (books != null && books.length > 0) {
    
    for (let i = 0; i < books.length; i++) {
      
   let data='<tr>'

                      data +=`<td>1</td>`;
                   data +=`<td>${books[i].id}</td>`;
                     data +=`<td>${books[i].name}</td>`;
                      data +=`<td>${books[i].author}</td>`;
                        data +=`<td>${books[i].price}</td>`;
                      data +=`<td>${books[i].image}</td>`;
                      data += `<td><button >Edit</button>`;
                      data += `<td><button>Delete</button></td>`;
                data += '</tr>'

               
    }  
} else {
    data += "<tr><td colspan='6'><h4 style='text-align:center'>No Record Found</h4></td></tr>";
  }

  document.getElementById("tabledata").innerHTML = data;        
}

 function validate(id,name,author,price,image) {
        if (id == "") {
            alert("Please Enter Book Id");
            document.getElementById("bookid").focus();
            return false;
      }else if(name==""){
        alert("Please Enter Book Name");
        document.getElementById("bookname").focus();
        return false;
      }else if(author==""){
        alert("Please Enter Book Author  Name");
        document.getElementById("bookauthor").focus();
        return false;
      }else if(price==""){
        alert("Please Enter Book Price");
        document.getElementById("bookprice").focus();
        return false;
      }else if(image==""){
        alert("Please Enter Book Image Url");
        document.getElementById("bookimage").focus();
        return false;
      }
      return true;
    }
      */
    let arrBooks = [];

    function add() {
        let id = document.getElementById("bookid").value;
        let name = document.getElementById("bookname").value;
        let author = document.getElementById("bookauthor").value;
        let price = document.getElementById("bookprice").value;
        let image = document.getElementById("bookimage").value;
    
        if (validate(id, name, author, price, image)) {
            alert("Validation ok");
            let book = {
                Id: id,
                Name: name,
                Author: author,
                Price: price,
                Image: image
            };
    
            arrBooks = JSON.parse(localStorage.getItem("books"));
            arrBooks = arrBooks == null ? [] : arrBooks;
            arrBooks.push(book);
            localStorage.setItem("books", JSON.stringify(arrBooks));
    
            BindTable();
        }
    }
    
    function BindTable() {
        let books = JSON.parse(localStorage.getItem("books"));
        alert(JSON.stringify(books));
        let data = "";
        if (books != null && books.length > 0) {
            for (let i = 0; i < books.length; i++) {
                data += '<tr>';
                data += `<td>${i + 1}</td>`;
                data += `<td>${books[i].Id}</td>`;
                data += `<td>${books[i].Name}</td>`;
                data += `<td>${books[i].Author}</td>`;
                data += `<td>${books[i].Price}</td>`;
                data += `<td><img src="${books[i].Image}" alt="Book Image" width="50" height="50"></td>`;
                data += `<td><button>Edit</button></td>`;
                data += `<td><button>Delete</button></td>`;
                data += '</tr>';
            }
        } else {
            data += "<tr><td colspan='8'><h4 style='text-align:center'>No Record Found</h4></td></tr>";
        }
    
        document.getElementById("tabledata").innerHTML = data;
    }
    
    function validate(id, name, author, price, image) {
        if (id == "") {
            alert("Please Enter Book Id");
            document.getElementById("bookid").focus();
            return false;
        } else if (name == "") {
            alert("Please Enter Book Name");
            document.getElementById("bookname").focus();
            return false;
        } else if (author == "") {
            alert("Please Enter Book Author Name");
            document.getElementById("bookauthor").focus();
            return false;
        } else if (price == "") {
            alert("Please Enter Book Price");
            document.getElementById("bookprice").focus();
            return false;
        } else if (image == "") {
            alert("Please Enter Book Image Url");
            document.getElementById("bookimage").focus();
            return false;
        }
        return true;
    }
    