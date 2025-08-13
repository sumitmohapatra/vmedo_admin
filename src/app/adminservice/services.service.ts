import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmitterVisitorContext } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  adminLoginUrl = environment.baseUrl + "vadmin/Adminauthentication";

  hospitalListurl = environment.baseUrl + "vadmin/AdminHospitalList";

  hospitalDeatilsUrl = environment.baseUrl + "vadmin/GetAllHospitalDetails?HospitalID=";

  approveHospitalUrl = environment.baseUrl + "vadmin/AdminApproveHospital";

  usersRegisteredUrl = environment.baseUrl + "vadmin/AdminUserRegisteredList";

  bloodDonorUrl = environment.baseUrl + "vadmin/GetBloodDonationList?UserID=";

  emergencyIDUrl = environment.baseUrl + "vadmin/FetchUserEmergencyID?UserID=";

  allemergencyIDUrl = environment.baseUrl + "vadmin/FetchALLEmergencyID";

  bloodDonorHistoryUrl = environment.baseUrl + "vadmin/GetBloodDonationList?UserID=";

  allBloodDonorListUrl = environment.baseUrl + "vadmin/GetAllBloodDonerList";

  emergencyIdAccessedURl = environment.baseUrl + "vadmin/FetchEIDVisitor?EMID=";

  bedTypeListUrl = environment.baseUrl + "vadmin/GetAllHospitalBedType";

  addBedTypeUrl = environment.baseUrl + "vadmin/AddHospitalBed";

  specializationListUrl = environment.baseUrl + "vadmin/GetAllHospitalSpelizationHandeled";

  addSpecializationUrl = environment.baseUrl + "vadmin/AddSpelizationhandel";

  emergencyHandledListUrl = environment.baseUrl + "vadmin/GetAllHospitalEmergencyHandeled";

  addEmergencyHandledUrl = environment.baseUrl + "vadmin/AddEmergencyhandel";

  addUserHomePageBannersUrl = environment.baseUrl + "/vadmin/Addsitebanner";

  getBannerImagesUrl = environment.baseUrl + "vadmin/GetAllSitebanner";

  deleteBannerImagesUrl = environment.baseUrl + "vadmin/DeleteSitebanner?ID=";

  hospitalChangeslistUrl = environment.baseUrl + "vadmin/GetAllHospitalChangeRequest";

  hospitalChangesDetailsUrl = environment.baseUrl + "vadmin/GetHospitalChangesApprovalDetails?CID=";

  acceptOrRejectHospitalChangesUrl = environment.baseUrl + "vadmin/AdminApproveHospitalChanges";

  hospitalUpdatesURl = environment.baseUrl + "vadmin/GetAllEHospitalChangeRequest";

  hospitalUpdateDetailsUrl = environment.baseUrl + "vadmin/AdminApproveEHospitalChanges";

  updateEmergencyHandeledUrl = environment.baseUrl + "hospital/UpdatehospitalemergencyhandelList";

  updateSpecializationUrl = environment.baseUrl + "hospital/Updatehospitalsplization";

  GetHospitalEmergencyHandelApprovalUrl = environment.baseUrl + "vadmin/GetAllHospitalEmergencyHandelApproval?hospitalId=";

  GetHospitalSpeliziationApprovalUrl = environment.baseUrl + "vadmin/GetAllHospitalSpeliziationApproval?hospitalId=";

  ApproveHospitalEmergencySpecializationUrl = environment.baseUrl + "vadmin/AdminApproveEmergencyChanges"

  GetHospitalsEmergencyHandledApprovalUrl = environment.baseUrl + "Vadmin/GetAdminHospitalEmergencyHandelApproval";

  GetHospitalsSpecializationApprovalUrl = environment.baseUrl + "Vadmin/GetAdminHospitalSpeliziationApproval";

  GetCreatedUserDetailsUrl = environment.baseUrl + "Vadmin/Fetchuserdetails?UserID=";

  GetDashboardDataUrl = environment.baseUrl + "Vadmin/Fetchdashboard";

  updateEmergencySubcategoryUrl = environment.baseUrl + "Vadmin/AddEmergencyCategoryhandel";

  GetEmergencyHandleSubcategoryUrl = environment.baseUrl + "Vadmin/GetAllHospitalEmergencyHandeledCategory?EID=";

  GetAllSubscriptionPackagesUrl = environment.baseUrl + "Vadmin/FetchSupscriptionPackage";

  createSubscriptionPackageUrl = environment.baseUrl + "Vadmin/AdminCreatesubscription";

  GetAllCouponCodesUrl = environment.baseUrl + "Vadmin/FetchCouponCodes";

  createCouponCodeUrl = environment.baseUrl + "Vadmin/AdminCreateCouponCode";

  EditSubscriptionPackageUrl = environment.baseUrl + "Vadmin/AdminEditsubscription";

  FetchCouponUsedDeatilsUrl = environment.baseUrl + "Vadmin/FetchCouponuseddetails?Coupon=";

  FetchAdminUsersDetailsUrl = environment.baseUrl + "Vadmin/FetchUserRoleddetails";

  createAdminRoleUrl = environment.baseUrl + "Vadmin/AdminCreateRole ";

  FetchAdminRoleListUrl = environment.baseUrl + "Vadmin/FetchAdminRoleddetails";

  EditAdminUserUrl = environment.baseUrl + "Vadmin/AdminUpdateCreatedRole";

  FetchPaidMembersUrl = environment.baseUrl + "vadmin/GetAllPaidUserlist";

  FetchCorporatesUrl = environment.baseUrl + "vadmin/Fetchorganisation_details";

  FetchCorporateTypeUrl = environment.baseUrl + "vadmin/Fetchcorporatetype_details";

  CreateCorporatePlanTypeUrl = environment.baseUrl + "vadmin/AdminCreateCorporatePlan";

  FetchCorporatePlanTypeUrl = environment.baseUrl + "vadmin/Fetchcorporateplan_details";

  createCorporatePlanUrl = environment.baseUrl + "vadmin/AdminCreateorganisationPlan";

  FetchCorporatePlanUrl = environment.baseUrl + "vadmin/Managecorporateplans";

  UpdateCorporatePlanUrl = environment.baseUrl + "vadmin/AdminEditorganisationPlan";

  AddCorporateCreditUrl = environment.baseUrl + "vadmin/AdminAddCreditorganisationPlan";

  getCorporatePlanTypeDetailsUrl = environment.baseUrl + "vadmin/Fetchcorporateplan_details";

  getVmedoPartnerDetailsUrl = environment.baseUrl + "vadmin/FetchGISPartner_details";

  getVmedoPartnerTypeUrl = environment.baseUrl + "vadmin/FetchGispartnertype";

  addVmedoPartnerUrl = environment.baseUrl + "vadmin/AdminAddGISPartners";

  getVmedoPartnerDetailsByIdUrl = environment.baseUrl + "vadmin/FetchGISPartnerbyid_details?ID=";

  editVmedoPartnerDetailsUrl = environment.baseUrl + "vadmin/AdminUpdateGISPartners";

  searchVmedoPartnerUrl = environment.baseUrl + "vadmin/SearchGISPartner_details";

  createPartnerTypeUrl = environment.baseUrl + "vadmin/CreateGispartnertype";

  createVmedoPartnerCityUrl = environment.baseUrl + "vadmin/AdminCreateCity";

  getVmedoPartnerCitiesUrl = environment.baseUrl + "vadmin/FetchCity_details";

  editVmedoPartnerCityUrl = environment.baseUrl + "vadmin/AdminUpdateCity";
 
  getVmedoPartnerSkillsUrl= environment.baseUrl + "vadmin/FetchSkills_details";

  createVmedoPartnerSkillsUrl= environment.baseUrl + "vadmin/AdminCreateSkills";

  editVmedoPartnerSkillsUrl= environment.baseUrl + "vadmin/AdminUpdateSkills";

  createVmedoPartnerUrl=environment.baseUrl + "vadmin/AddPartnerAddress";

  updateVmedoPartnerAddressUrl=environment.baseUrl + "vadmin/UpdatePartnerAddress";

  UpdateVmedoPartnerAddressByIdUrl= environment.baseUrl + "vadmin/Fetchpartneraddressby_id?ID=";

  updateSubscriptionDetailsUrl= environment.baseUrl + "vadmin/UpdateSubscriptionDate_details";


  hospitalsID: any;
  emergencyUserID: any;
  emergencyUsersID: any;
  bloodDonorsID: any;
  emergencyID: any;
  bloodDonorID: any;
  bannerImageid: any;
  hospitalChangesID: any;
  previousHospitalChangesID: any;
  HospitalEmergencyHandleChangesID: any;
  HospitalEmergencyHandleID: any;
  HospitalSpecializationID: any;
  createdUserID: any;
  emergencySubcategoryID: any;
  couponName: any;
  VmedoPartnerDetails: any;
  VmedoPartnerAddressDetails:any;


  constructor(private http: HttpClient, private router: Router) { }

  updateSubscriptionDetailsData(){
    return this.http.get(this.updateSubscriptionDetailsUrl);
  }

  getVmedoPartnerAddressDataById() {
    this.VmedoPartnerAddressDetails = JSON.parse(sessionStorage.getItem('vmedoPartnerAddressID'));
    return this.http.get(this.UpdateVmedoPartnerAddressByIdUrl + this.VmedoPartnerAddressDetails);
  }  

  updateVmedoPartnerAddressData(data:any){
    return this.http.post(this.updateVmedoPartnerAddressUrl,data);
  }


  createVmedoPartnerData(data:any){
    return this.http.post(this.createVmedoPartnerUrl,data);
  }

  getVmedoPartnerCityDetails() {
    return this.http.get(this.getVmedoPartnerCitiesUrl);
  }

  createVmedoPartnerCityData(data:any){
    return this.http.post(this.createVmedoPartnerCityUrl,data);
  }

  editVmedoPartnerCityData(data:any){
    return this.http.post(this.editVmedoPartnerCityUrl,data);
  }




  createVmedoPartnerSkills(data:any){
    return this.http.post(this.createVmedoPartnerSkillsUrl,data);
  }

  editVmedoPartnersSkills(data:any){
    return this.http.post(this.editVmedoPartnerSkillsUrl,data);
  }
  

  getVmedoPartnerSkillsDetails() {
    return this.http.get(this.getVmedoPartnerSkillsUrl);
  }


  createPartnerTypeData(data:any){
    return this.http.post(this.createPartnerTypeUrl,data);
  }

  searchVmedoPartnerData(data:any){
    return this.http.post(this.searchVmedoPartnerUrl,data);
  }
  
  getLocationDetailsByPlaceId(placeId: string) {
    const url = `${environment.baseUrl}user/GetLocationDetailsByPlaceID?placeId=${placeId}`;
    return this.http.get(url);
  }

  getLocationsByInput(inputValue: string): Observable<any> {
    const apiUrl = `${environment.baseUrl}user/GetLocationsBYInput?inputvalue=${inputValue}`;
    return this.http.get(apiUrl);
  }


  editVmedoPartnersData(data:any){
    return this.http.post(this.editVmedoPartnerDetailsUrl,data);
  }
  

  getVmedoPartnerDataById() {
    this.VmedoPartnerDetails = JSON.parse(sessionStorage.getItem('vmedoPartnerID'));
    return this.http.get(this.getVmedoPartnerDetailsByIdUrl + this.VmedoPartnerDetails);
  }

  addVmedoPartnersData(data:any){
    return this.http.post(this.addVmedoPartnerUrl,data);
  }

  getVmedoPartnerTypeDetails() {
    return this.http.get(this.getVmedoPartnerTypeUrl);
  }

  GetVmedoPartnerDetails() {
    return this.http.get(this.getVmedoPartnerDetailsUrl);
  }

  GetCorporatePlanTypeDetails() {
    return this.http.get(this.getCorporatePlanTypeDetailsUrl);
  }

  AddCorporateCredit(data: any) {

    return this.http.post(this.AddCorporateCreditUrl, data);

  }

  UpdateCorporatePlan(data: any) {
    return this.http.post(this.UpdateCorporatePlanUrl, data);
  }

  GetCorporatePlan() {
    return this.http.get(this.FetchCorporatePlanUrl);
  }


  CreateCorporatePlan(data: any) {
    return this.http.post(this.createCorporatePlanUrl, data);
  }

  GetCorporatePlanType() {
    return this.http.get(this.FetchCorporatePlanTypeUrl);
  }

  CreateCorporatePlanType(data: any) {
    return this.http.post(this.CreateCorporatePlanTypeUrl, data);
  }

  GetCorporateTypeData() {
    return this.http.get(this.FetchCorporateTypeUrl);
  }

  GetCorporatesData() {
    return this.http.get(this.FetchCorporatesUrl);
  }

  GetPaidUsersData() {
    const url=`${environment.baseUrl}vadmin/GetAllPaymentHistoryUserlist`
    return this.http.get(url);
  }

  EditAdminUserData(data: any) {
    return this.http.post(this.EditAdminUserUrl, data);
  }

  GetAdminRoleListData() {
    return this.http.get(this.FetchAdminRoleListUrl);
  }

  createAdminRoleData(data: any) {
    return this.http.post(this.createAdminRoleUrl, data);
  }

  GetAllAdminUsersData() {
    return this.http.get(this.FetchAdminUsersDetailsUrl);
  }


  logout(): void {
    // Redirect the user to the login page or any other desired page
    this.router.navigate(['/admin-login']);
  }

  GetCouponUsedDetailsData() {
    this.couponName = JSON.parse(sessionStorage.getItem('CouponName'));
    return this.http.get(this.FetchCouponUsedDeatilsUrl + this.couponName);
  }

  editSubscriptionPackageData(data: any) {
    return this.http.post(this.EditSubscriptionPackageUrl, data);
  }

  createCouponCodeData(data: any) {
    return this.http.post(this.createCouponCodeUrl, data);
  }

  GetAllCouponCodesData() {
    return this.http.get(this.GetAllCouponCodesUrl);
  }

  createSubscriptionPackageData(data: any) {
    return this.http.post(this.createSubscriptionPackageUrl, data);
  }

  GetAllSubscriptionPackagesData() {
    return this.http.get(this.GetAllSubscriptionPackagesUrl);
  }

  GetEmergencyHandleSubcategoryData() {
    this.emergencySubcategoryID = JSON.parse(sessionStorage.getItem('emergencyhandelSubcategorydata'));
    return this.http.get(this.GetEmergencyHandleSubcategoryUrl + this.emergencySubcategoryID);
  }

  updateEmegencySubcategoryData(data: any) {
    return this.http.post(this.updateEmergencySubcategoryUrl, data);
  }

  GetDashboardData() {
    return this.http.get(this.GetDashboardDataUrl);
  }

  GetCreatedUserDetailsData() {
    this.createdUserID = JSON.parse(sessionStorage.getItem('createdUserID'));
    return this.http.get(this.GetCreatedUserDetailsUrl + this.createdUserID);
  }

  GetHospitalsSpecializationApproval() {
    return this.http.get(this.GetHospitalsSpecializationApprovalUrl);
  }

  GetHospitalsEmergencyHandledApproval() {
    return this.http.get(this.GetHospitalsEmergencyHandledApprovalUrl);
  }

  ApproveHospitalEmergencySpecializationData(data: any) {
    return this.http.post(this.ApproveHospitalEmergencySpecializationUrl, data);
  }

  GetHospitalSpezializationApprovalData() {

    this.HospitalSpecializationID = JSON.parse(sessionStorage.getItem('hospitalID'));
    return this.http.get(this.GetHospitalSpeliziationApprovalUrl + this.HospitalSpecializationID);
  }


  GetHospitalEmergencyHandelApprovalData() {

    this.HospitalEmergencyHandleID = JSON.parse(sessionStorage.getItem('hospitalID'));
    return this.http.get(this.GetHospitalEmergencyHandelApprovalUrl + this.HospitalEmergencyHandleID);

  }

  updateSpecialization(data: any) {
    return this.http.post(this.updateSpecializationUrl, data);
  }


  getHospitalEmergencyHandleDetails() {
    this.HospitalEmergencyHandleChangesID = JSON.parse(sessionStorage.getItem('hospitalUpdatesData'));
    return this.http.get(this.hospitalDeatilsUrl + this.HospitalEmergencyHandleChangesID.hospitalID);

    // this.hospitalsID = JSON.parse(sessionStorage.getItem('hospitalID'));
    // return this.http.get(this.hospitalDeatilsUrl + this.hospitalsID);
  }


  updateEmergencyHandeled(data: any) {
    return this.http.post(this.updateEmergencyHandeledUrl, data);
  }

  getHospitalPreviousDetails() {
    this.previousHospitalChangesID = JSON.parse(sessionStorage.getItem('hospitalchangesObject'));
    return this.http.get(this.hospitalDeatilsUrl + this.previousHospitalChangesID.hospitalID);

    // this.hospitalsID = JSON.parse(sessionStorage.getItem('hospitalID'));
    // return this.http.get(this.hospitalDeatilsUrl + this.hospitalsID);
  }

  acceptOrRejecthospitalUpdatesData(data: any) {

    return this.http.post(this.hospitalUpdateDetailsUrl, data);

  }

  getHospitalUpdatesData() {
    return this.http.get(this.hospitalUpdatesURl);
  }

  acceptOrRejectHospitalChangesData(data: any) {
    return this.http.post(this.acceptOrRejectHospitalChangesUrl, data);
  }

  getHospitalChangesDetailsData() {
    this.hospitalChangesID = JSON.parse(sessionStorage.getItem('hospitalchangesObject'));
    return this.http.get(this.hospitalChangesDetailsUrl + this.hospitalChangesID.id);
  }

  hospitalChangesListData() {
    return this.http.get(this.hospitalChangeslistUrl);
  }

  getBannerImagesData() {
    return this.http.get(this.getBannerImagesUrl);
  }

  deleteBannerImage() {
    this.bannerImageid = JSON.parse(sessionStorage.getItem('bannerImageID'));
    return this.http.get(this.deleteBannerImagesUrl + this.bannerImageid);
  }

  addEmergencyHandledData(data: any) {
    return this.http.post(this.addEmergencyHandledUrl, data);
  }

  getEmergencyHandledList() {
    return this.http.get(this.emergencyHandledListUrl);
  }

  addSpecializationData(data: any) {
    return this.http.post(this.addSpecializationUrl, data);
  }

  getHospitalSpecializationList() {
    return this.http.get(this.specializationListUrl);
  }

  getBedTypeList() {
    return this.http.get(this.bedTypeListUrl);
  }

  addBedTypeData(data: any) {
    return this.http.post(this.addBedTypeUrl, data);
  }

  adminLogin(data: any) {
    return this.http.post(this.adminLoginUrl, data);
  }

  getHospitalListComplete() {
    return this.http.get(this.hospitalListurl);
  }

  getHospitalDetails() {
    this.hospitalsID = JSON.parse(sessionStorage.getItem('hospitalID'));
    return this.http.get(this.hospitalDeatilsUrl + this.hospitalsID);
  }

  approveHospital(data: any) {
    return this.http.post(this.approveHospitalUrl, data);
  }

  usersRegisteredList() {
    return this.http.get(this.usersRegisteredUrl);
  }

  getEmergencyID() {
    this.emergencyUsersID = JSON.parse(sessionStorage.getItem('emergencyUserID'));
    return this.http.get(this.emergencyIDUrl + this.emergencyUsersID);
  }

  getBloodDonorList() {
    this.bloodDonorsID = JSON.parse(sessionStorage.getItem('bloodDonorID'));
    return this.http.get(this.bloodDonorUrl + this.bloodDonorsID);
  }

  getEmergencyIDNumber() {
    return this.http.get(this.emergencyIDUrl + this.emergencyUsersID);
  }

  getallemergencyID() {
    return this.http.get(this.allemergencyIDUrl);
  }

  getBloodDonorHistroy() {

    this.bloodDonorID = JSON.parse(sessionStorage.getItem('bloodDonorID'));
    return this.http.get(this.bloodDonorHistoryUrl + this.bloodDonorID);
  }

  getallBloodDonorList() {
    return this.http.get(this.allBloodDonorListUrl);
  }

  emergencyIdAccessedDetails() {
    this.emergencyID = JSON.parse(sessionStorage.getItem('emergencyID'));
    return this.http.get(this.emergencyIdAccessedURl + this.emergencyID);
  }

  getAllAgents() {
    return this.http.get(`${environment.baseUrl}vadmin/GetAllRegisteredAgents`);
  }

  createAgent(createAgentRequest:any) {
    return this.http.post(`${environment.baseUrl}vadmin/AddNewAgent`,createAgentRequest);
  }
}
