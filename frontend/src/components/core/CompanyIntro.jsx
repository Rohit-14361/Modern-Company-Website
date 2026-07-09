function CompanyIntro() {
  return (
    <div className="flex flex-row gap-x-2 items-center">
      <svg className="h-24 w-24" aria-hidden="true">
        <use href="/icons.svg#bluesky-icon" />
      </svg>

      <h2 className="font-bold text-3xl ">Digi Labs</h2>
    </div>
  );
}

export default CompanyIntro;
