function Home() {
  return (
    <><header>
      <div class="nav"></div>
  </header>
  <div class="background">
    <div class="grid ">
          <div class="item" tabindex="1">
            <div class="box">
            </div>
          </div>
          <div class="item" tabindex="2">
            <div class="box">
            </div>
          </div>
          <div class="item" tabindex="3">
            <div class="box">
            </div>
          </div>
          <div class="item" tabindex="4">
            <div class="box">
            </div>
          </div>
        </div>
  </div></>
  );
}


export default function MyApp() {
  return (
    <div>
      <Home />
    </div>
  );
}
