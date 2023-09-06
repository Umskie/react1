

const Body = ()=> {
    return (<div>
        
<div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
    
        <div class="carousel-item active">
        <img src="https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block w-100" alt="..."/>
        </div>
    
        <div class="carousel-item">
        <img src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block w-100" alt="..."/>
        </div>
    
        <div class="carousel-item">
        <img src="https://images.pexels.com/photos/1155577/pexels-photo-1155577.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block w-100" alt="..."/>
        </div>
    </div>


  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>

{/* Cards */}
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card" >
  <img class="card-img-top" src="https://images.pexels.com/photos/7605625/pexels-photo-7605625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
  <img class="card-img-top" src="https://images.pexels.com/photos/18168998/pexels-photo-18168998/free-photo-of-close-up-of-orange-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
  <img class="card-img-top" src="https://images.pexels.com/photos/9030684/pexels-photo-9030684.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>

            </div>)
}
export default Body