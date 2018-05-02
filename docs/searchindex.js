Search.setIndex({docnames:["AMPAL_Introduction_and_Selections","Advanced_Selections_and_Analysis","ampal","index","installation","modules"],envversion:53,filenames:["AMPAL_Introduction_and_Selections.rst","Advanced_Selections_and_Analysis.rst","ampal.rst","index.rst","installation.rst","modules.rst"],objects:{"":{ampal:[2,0,0,"-"]},"ampal.amino_acids":{add_amino_acid_to_json:[2,1,1,""],get_aa_code:[2,1,1,""],get_aa_info:[2,1,1,""],get_aa_letter:[2,1,1,""]},"ampal.ampal_warnings":{DependencyNotFoundWarning:[2,2,1,""],MalformedPDBWarning:[2,2,1,""],NoncanonicalWarning:[2,2,1,""],NotParameterisedWarning:[2,2,1,""],check_availability:[2,1,1,""]},"ampal.analyse_protein":{alpha_angles:[2,1,1,""],cc_to_local_params:[2,1,1,""],charge_series:[2,1,1,""],crick_angles:[2,1,1,""],flip_reference_axis_if_antiparallel:[2,1,1,""],make_primitive:[2,1,1,""],make_primitive_extrapolate_ends:[2,1,1,""],make_primitive_smoothed:[2,1,1,""],measure_sidechain_torsion_angles:[2,1,1,""],measure_torsion_angles:[2,1,1,""],partial_charge:[2,1,1,""],polymer_to_reference_axis_distances:[2,1,1,""],polypeptide_vector:[2,1,1,""],reference_axis_from_chains:[2,1,1,""],residues_per_turn:[2,1,1,""],sequence_charge:[2,1,1,""],sequence_isoelectric_point:[2,1,1,""],sequence_molar_extinction_280:[2,1,1,""],sequence_molecular_weight:[2,1,1,""]},"ampal.assembly":{AmpalContainer:[2,3,1,""],Assembly:[2,3,1,""]},"ampal.assembly.AmpalContainer":{append:[2,4,1,""],extend:[2,4,1,""],id:[2,5,1,""],pdb:[2,5,1,""],sort_by_tag:[2,4,1,""]},"ampal.assembly.Assembly":{append:[2,4,1,""],backbone:[2,5,1,""],extend:[2,4,1,""],fasta:[2,5,1,""],filter_mol_types:[2,4,1,""],get_atoms:[2,4,1,""],get_ligands:[2,4,1,""],get_monomers:[2,4,1,""],is_within:[2,4,1,""],isoelectric_point:[2,5,1,""],make_pdb:[2,4,1,""],molar_extinction_280:[2,5,1,""],molecular_weight:[2,5,1,""],pdb:[2,5,1,""],primitives:[2,5,1,""],relabel_all:[2,4,1,""],relabel_atoms:[2,4,1,""],relabel_monomers:[2,4,1,""],relabel_polymers:[2,4,1,""],sequences:[2,5,1,""],tag_atoms_unique_ids:[2,4,1,""],tag_ca_geometry:[2,4,1,""],tag_torsion_angles:[2,4,1,""]},"ampal.base_ampal":{Atom:[2,3,1,""],BaseAmpal:[2,3,1,""],Monomer:[2,3,1,""],Polymer:[2,3,1,""],cap:[2,1,1,""],centre_of_atoms:[2,1,1,""],find_atoms_within_distance:[2,1,1,""],write_pdb:[2,1,1,""]},"ampal.base_ampal.Atom":{array:[2,5,1,""],element:[2,5,1,""],id:[2,5,1,""],parent:[2,5,1,""],res_label:[2,5,1,""],rotate:[2,4,1,""],tags:[2,5,1,""],translate:[2,4,1,""],unique_id:[2,5,1,""],x:[2,5,1,""],y:[2,5,1,""],z:[2,5,1,""]},"ampal.base_ampal.BaseAmpal":{centre_of_mass:[2,5,1,""],get_atoms:[2,4,1,""],is_within:[2,4,1,""],make_pdb:[2,4,1,""],pdb:[2,5,1,""],rmsd:[2,4,1,""],rotate:[2,4,1,""],translate:[2,4,1,""]},"ampal.base_ampal.Monomer":{active_state:[2,5,1,""],atoms:[2,5,1,""],close_monomers:[2,4,1,""],get_atoms:[2,4,1,""],get_monomers:[2,4,1,""],id:[2,5,1,""],make_pdb:[2,4,1,""],parent:[2,5,1,""],states:[2,5,1,""],tags:[2,5,1,""]},"ampal.base_ampal.Polymer":{append:[2,4,1,""],extend:[2,4,1,""],get_atoms:[2,4,1,""],get_monomers:[2,4,1,""],get_reference_coords:[2,4,1,""],id:[2,5,1,""],ligands:[2,5,1,""],make_pdb:[2,4,1,""],molecule_type:[2,5,1,""],parent:[2,5,1,""],relabel_all:[2,4,1,""],relabel_atoms:[2,4,1,""],relabel_monomers:[2,4,1,""],sl:[2,5,1,""],tags:[2,5,1,""]},"ampal.geometry":{Axis:[2,3,1,""],Curve:[2,3,1,""],HelicalCurve:[2,3,1,""],Quaternion:[2,3,1,""],angle_between_vectors:[2,1,1,""],apply_unit_quaternion:[2,1,1,""],cartesian_to_cylindrical:[2,1,1,""],cartesian_to_spherical:[2,1,1,""],centre_of_mass:[2,1,1,""],closest_distance:[2,1,1,""],closest_points_on_lines:[2,1,1,""],cylindrical_to_cartesian:[2,1,1,""],dihedral:[2,1,1,""],distance:[2,1,1,""],find_foot:[2,1,1,""],find_foot_on_plane:[2,1,1,""],find_limits:[2,1,1,""],find_transformations:[2,1,1,""],gen_sectors:[2,1,1,""],intersection_start_and_end:[2,1,1,""],is_acute:[2,1,1,""],minimal_distance_between_lines:[2,1,1,""],points_on_a_circle:[2,1,1,""],radius_of_circumcircle:[2,1,1,""],rmsd:[2,1,1,""],rotation_matrix:[2,1,1,""],spherical_to_cartesian:[2,1,1,""],unit_vector:[2,1,1,""]},"ampal.geometry.Axis":{arc_length:[2,5,1,""],direction_vector:[2,5,1,""],distance_to_point:[2,5,1,""],get_coords:[2,5,1,""],length:[2,5,1,""],midpoint:[2,5,1,""],point:[2,5,1,""],t_from_arc_length:[2,5,1,""],unit_binormal:[2,5,1,""],unit_normal:[2,5,1,""],unit_tangent:[2,5,1,""]},"ampal.geometry.Curve":{point:[2,5,1,""]},"ampal.geometry.HelicalCurve":{alpha:[2,5,1,""],alpha_and_pitch:[2,6,1,""],alpha_and_radius:[2,6,1,""],arc_length:[2,5,1,""],axis:[2,5,1,""],curvature:[2,5,1,""],get_coords:[2,5,1,""],pitch:[2,5,1,""],pitch_and_radius:[2,6,1,""],point:[2,5,1,""],radius:[2,5,1,""],t_from_arc_length:[2,5,1,""],torsion:[2,5,1,""],unit_binormal:[2,5,1,""],unit_normal:[2,5,1,""],unit_tangent:[2,5,1,""],x:[2,5,1,""],y:[2,5,1,""],z:[2,5,1,""]},"ampal.geometry.Quaternion":{angle_and_axis:[2,6,1,""],apply_conjugation:[2,5,1,""],as_array:[2,5,1,""],as_rotation:[2,5,1,""],conjugate:[2,5,1,""],distance:[2,5,1,""],extract_angle_and_axis:[2,5,1,""],norm:[2,5,1,""],real_and_vector:[2,6,1,""],rotate_vector:[2,5,1,""],vector:[2,5,1,""]},"ampal.interactions":{CovalentBond:[2,3,1,""],HydrogenBond:[2,3,1,""],Interaction:[2,3,1,""],NonCovalentInteraction:[2,3,1,""],covalent_bonds:[2,1,1,""],find_covalent_bonds:[2,1,1,""],generate_bond_subgraphs_from_break:[2,1,1,""],generate_covalent_bond_graph:[2,1,1,""]},"ampal.interactions.CovalentBond":{a:[2,5,1,""],b:[2,5,1,""]},"ampal.interactions.HydrogenBond":{acceptor:[2,5,1,""],acceptor_monomer:[2,5,1,""],ang_a:[2,5,1,""],ang_d:[2,5,1,""],dist:[2,5,1,""],donor:[2,5,1,""],donor_monomer:[2,5,1,""]},"ampal.interactions.Interaction":{a:[2,5,1,""],b:[2,5,1,""],dist:[2,5,1,""]},"ampal.interactions.NonCovalentInteraction":{acceptor:[2,5,1,""],dist:[2,5,1,""],donor:[2,5,1,""]},"ampal.ligands":{Ligand:[2,3,1,""],LigandGroup:[2,3,1,""]},"ampal.ligands.Ligand":{atoms:[2,5,1,""],id:[2,5,1,""],insertion_code:[2,5,1,""],is_hetero:[2,5,1,""],mol_code:[2,5,1,""],parent:[2,5,1,""],tags:[2,5,1,""]},"ampal.ligands.Ligand.self":{states:[2,5,1,""]},"ampal.nucleic_acid":{Nucleotide:[2,3,1,""],Polynucleotide:[2,3,1,""]},"ampal.nucleic_acid.Nucleotide":{id:[2,5,1,""],insertion_code:[2,5,1,""],is_hetero:[2,5,1,""],mol_code:[2,5,1,""],parent:[2,5,1,""],reference_atom:[2,5,1,""],states:[2,5,1,""],tags:[2,5,1,""]},"ampal.nucleic_acid.Polynucleotide":{id:[2,5,1,""],ligands:[2,5,1,""],molecule_type:[2,5,1,""],parent:[2,5,1,""],sequence:[2,5,1,""],sl:[2,5,1,""],tags:[2,5,1,""]},"ampal.pdb_parser":{PdbParser:[2,3,1,""],load_pdb:[2,1,1,""]},"ampal.pdb_parser.PdbParser":{change_state:[2,4,1,""],check_for_non_canonical:[2,7,1,""],current_line:[2,5,1,""],end:[2,4,1,""],gen_states:[2,4,1,""],id:[2,5,1,""],ignore_end:[2,5,1,""],make_ampal:[2,4,1,""],new_labels:[2,5,1,""],parse_pdb_file:[2,4,1,""],pdb_lines:[2,5,1,""],pdb_parse_tree:[2,5,1,""],proc_atom:[2,4,1,""],proc_chain:[2,4,1,""],proc_functions:[2,5,1,""],proc_line_coordinate:[2,4,1,""],proc_monomer:[2,4,1,""],proc_state:[2,4,1,""],state:[2,5,1,""]},"ampal.protein":{Polypeptide:[2,3,1,""],Residue:[2,3,1,""],align:[2,1,1,""],flat_list_to_dummy_chain:[2,1,1,""],flat_list_to_polymer:[2,1,1,""]},"ampal.protein.Polypeptide":{backbone:[2,5,1,""],backbone_bond_angles:[2,5,1,""],backbone_bond_lengths:[2,5,1,""],c_join:[2,4,1,""],fasta:[2,5,1,""],get_slice_from_res_id:[2,4,1,""],id:[2,5,1,""],isoelectric_point:[2,5,1,""],ligands:[2,5,1,""],molar_extinction_280:[2,5,1,""],molecular_weight:[2,5,1,""],molecule_type:[2,5,1,""],n_join:[2,4,1,""],parent:[2,5,1,""],primitive:[2,5,1,""],radii_of_curvature:[2,4,1,""],rise_per_residue:[2,4,1,""],sequence:[2,5,1,""],sl:[2,5,1,""],tag_ca_geometry:[2,4,1,""],tag_sidechain_dihedrals:[2,4,1,""],tag_torsion_angles:[2,4,1,""],tags:[2,5,1,""],valid_backbone_bond_angles:[2,4,1,""],valid_backbone_bond_lengths:[2,4,1,""]},"ampal.protein.Residue":{backbone:[2,5,1,""],centroid:[2,5,1,""],id:[2,5,1,""],insertion_code:[2,5,1,""],is_hetero:[2,5,1,""],mol_code:[2,5,1,""],parent:[2,5,1,""],reference_atom:[2,5,1,""],side_chain:[2,5,1,""],states:[2,5,1,""],tags:[2,5,1,""],unique_id:[2,5,1,""]},"ampal.pseudo_atoms":{Primitive:[2,3,1,""],PseudoAtom:[2,3,1,""],PseudoGroup:[2,3,1,""],PseudoMonomer:[2,3,1,""]},"ampal.pseudo_atoms.Primitive":{coordinates:[2,5,1,""],from_coordinates:[2,6,1,""],id:[2,5,1,""],insertion_code:[2,5,1,""],is_hetero:[2,5,1,""],mol_code:[2,5,1,""],parent:[2,5,1,""],radii_of_curvature:[2,4,1,""],reference_atom:[2,5,1,""],rise_per_residue:[2,4,1,""],states:[2,5,1,""],tags:[2,5,1,""]},"ampal.pseudo_atoms.PseudoAtom":{element:[2,5,1,""],id:[2,5,1,""],parent:[2,5,1,""],res_label:[2,5,1,""],tags:[2,5,1,""]},"ampal.pseudo_atoms.PseudoGroup":{id:[2,5,1,""],ligands:[2,5,1,""],molecule_type:[2,5,1,""],parent:[2,5,1,""],sl:[2,5,1,""],tags:[2,5,1,""]},"ampal.pseudo_atoms.PseudoMonomer":{id:[2,5,1,""],insertion_code:[2,5,1,""],is_hetero:[2,5,1,""],mol_code:[2,5,1,""],parent:[2,5,1,""],pdb:[2,5,1,""],reference_atom:[2,5,1,""],states:[2,5,1,""],tags:[2,5,1,""]},ampal:{amino_acids:[2,0,0,"-"],ampal_warnings:[2,0,0,"-"],analyse_protein:[2,0,0,"-"],assembly:[2,0,0,"-"],base_ampal:[2,0,0,"-"],data:[2,0,0,"-"],geometry:[2,0,0,"-"],interactions:[2,0,0,"-"],ligands:[2,0,0,"-"],nucleic_acid:[2,0,0,"-"],pdb_parser:[2,0,0,"-"],protein:[2,0,0,"-"],pseudo_atoms:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","exception","Python exception"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","classmethod","Python class method"],"7":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:exception","3":"py:class","4":"py:method","5":"py:attribute","6":"py:classmethod","7":"py:staticmethod"},terms:{"0x7fbf649db588":1,"2000px":2,"3qy1":[0,1],"52706ed7e5b3":0,"abstract":2,"case":[0,2],"class":2,"default":[1,2,4],"final":2,"float":2,"function":[0,1,2],"import":[0,1,2],"int":[0,2],"new":2,"return":[0,1,2],"static":2,"true":[0,1,2],"try":[0,1],"while":[0,1,2],But:1,CAs:2,CYS:1,For:2,HIS:1,Has:2,ILE:[0,1],LYS:1,Not:2,One:[1,2],The:[0,1,2],Then:2,There:[1,2],These:[0,2],Use:2,Used:2,Useful:2,Uses:2,Using:2,Will:2,With:[0,1],__getitem__:0,_distanc:2,_monom:0,a07:2,aa_cod:2,aa_dict:2,aa_lett:2,about:[1,2],abov:[1,2],absolut:2,acceptor:2,acceptor_monom:2,access:[0,2],accuraci:2,acid:[0,1,2],across:2,activ:[2,3],active_st:2,adapt:2,add:[0,2],add_amino_acid_to_json:2,added:2,adher:2,adjac:2,advanc:3,advantag:1,after:2,again:1,ala:[1,2],align:2,all:[0,2,3],allow:[0,2],along:2,alpha:2,alpha_and_pitch:2,alpha_and_radiu:2,alpha_angl:2,alphabet:2,alphaloc:2,alreadi:[1,2],also:[0,2,4],alt_stat:2,altern:2,amid:2,amino:[0,1,2],amino_acid:5,aminoaciddb:2,ampal:4,ampal_contain:2,ampal_object:2,ampal_par:0,ampal_warn:5,ampalcontain:2,anaconda3:0,analog:0,analys:[0,2,3],analyse_protein:5,analysi:3,analyzemath:2,ang_a:2,ang_d:2,angl:[1,2],angle_and_axi:2,angle_between_vector:[1,2],angstom:2,angstrom:[1,2],ani:[0,1,2],anoth:[1,2],anti:2,antiparallel:2,anywai:2,api:3,append:[1,2],appl:2,appli:2,applic:2,apply_conjug:2,apply_unit_quaternion:2,approxim:2,arc:2,arc_length:2,architectur:0,aren:0,arg:1,argument:0,around:[0,2],arrai:[1,2],arrang:2,articl:2,as_arrai:2,as_rot:2,asn:1,asp:[0,1],aspart:1,assembl:[0,1,3,5],assembly_id:2,assign:[0,2],associ:[0,2],atan2:2,atol:2,atom1:2,atom2:2,atom:[2,3],atom_group_:2,atom_id:2,atom_list:2,atom_typ:2,atoms_close_to_zinc:1,attribut:0,attributeerror:2,avail:[2,4],averag:2,awai:2,axi:2,axis_end:2,axis_start:2,azimuth:2,back:[0,2],backbon:2,backbone_bond_angl:2,backbone_bond_length:2,bake:1,barrel:2,base:[0,2],base_amp:[0,5],baseamp:2,basic:[2,3],bb_assembl:2,bb_monom:2,bb_poli:2,been:2,befor:[1,2],being:2,between:2,bfactor:2,binorm:2,biol:2,biomolecul:0,biomolecular:3,biopython:2,block:1,bond:[1,2],bond_angl:2,bond_graph:2,bond_length:2,bool:2,both:[0,2],bracket:0,broken:2,browser:0,build:4,built:1,builtin:0,bundl:2,c_join:2,c_n:2,c_n_ca:2,c_n_ca_angl:2,c_n_length:2,c_o:2,ca_c:2,ca_c_n:2,ca_c_o:2,cach:2,calcul:[1,2],call:[0,1,2],can:[0,1,2,4],cannot:2,canon:2,cap:2,carbon:[0,1,2],carboxi:2,care:2,cartesian:2,cartesian_to_cylindr:2,cartesian_to_spher:2,cas_coord:2,cc_to_local_param:2,cd1:1,cd2:[1,2],cdef:2,cdhit:2,centr:2,central:2,centre_of_atom:2,centre_of_mass:2,centroid:2,certain:2,cg1:1,cg2:1,chain:[1,2,3],chain_id:2,chain_info:2,chain_vector:2,chang:2,change_st:2,charact:2,charg:2,charge_seri:2,check:[0,1,2],check_avail:2,check_for_non_canon:2,chemic:2,chi1:[1,2],chi2:[1,2],chi3:2,chi4:2,chi_angl:2,child:2,chosen:2,circl:2,circumcircl:2,circumcircleradiu:2,circumfer:2,cis:1,clariti:1,classmethod:2,clockwis:2,clone:4,close:[1,2],close_monom:[1,2],closest:2,closest_dist:2,closest_points_on_lin:2,cluster:2,code:[0,1,2],coeffici:2,coil:2,colinear:2,collat:2,collect:[1,2],collinear:2,column:2,com:2,combin:1,comfort:1,common:[1,2],commonli:1,compar:2,compat:2,compil:[2,4],complex:[0,1],compon:2,compos:2,composit:3,comprehens:1,concis:1,conform:[1,2],confus:1,conjug:2,connect:2,consist:2,constraint:2,construct:2,contain:[0,1,2],content:[1,3,5],convent:2,convert:[1,2,3],convini:1,coord:2,coordin:[0,1,2],correct:2,correspond:2,could:[1,2],count:1,counter:[1,2],counterpart:2,coval:2,covalent_bond:2,covalentbond:2,cover:1,cr_angl:2,creat:2,crick:2,crick_angl:2,cross_product:2,crystal:[0,1],current:[0,2],current_lin:2,curv:2,curvatur:2,custom:2,cut:2,cutoff:[1,2],cutoff_dist:2,cycl:2,cylind:2,cylindr:2,cylindrical_coordinate_system:2,cylindrical_to_cartesian:2,cylindricalcoordin:2,cystein:1,cython:4,dalton:2,data:5,databas:2,dedic:2,defin:[0,2],definit:2,degre:2,depend:2,dependencynotfoundwarn:2,deriviatv:2,describ:2,descript:2,design:[0,2],desir:2,detail:[0,1,2],determin:0,deviat:2,dict:2,dictat:2,dictionari:[0,2],didtlisnnalw:0,didtlisnnalwskmlveedpgffeklaqaqkprflwigcsdsrvpaerltglepgelfvhrnvanlvihtdlnclsvvqyavdvlevehiiicghsgcggikaavenpelglinnwllhirdiwlkhssllgkmpeeqrldalyelnvmeqvynlghstimqsawkrgqnvtihgwaysindgllrdldvtatnretlengyhkgisalslkyi:[0,1],differ:0,differential_geometry_of_curv:2,dihedr:[1,2],dihedral_angl:2,dimension:2,direct:2,direction_vector:2,directli:2,discuss:0,dist:2,distanc:[2,3],distance_to_point:2,distinct:2,distribut:2,dna:[0,2],document:[0,1,2],doe:2,donor:2,donor_monom:2,dot:2,doubl:2,down:[0,1,2],download:[2,4],dum:2,dummi:2,duplic:0,dure:2,each:[0,1,2],easi:0,easier:2,easili:[0,1],effici:[1,2],effort:1,either:[0,1,2],element:[0,1,2],element_data:2,elif:0,els:2,empti:[1,2],encount:2,end:2,end_index:2,entri:2,equal:2,equat:2,essenti:1,etc:2,euclidean:2,euclidian:2,even:[0,1,2],evenli:2,everi:[1,2],exactli:[0,1],examin:[1,2],exampl:[0,1,2],except:2,exist:2,expect:[1,2],explan:2,explicitli:2,extend:2,extens:2,extinct:2,extract:[0,2],extract_angle_and_axi:2,extrapol:2,fals:[1,2],fasta:2,fasta_format:2,fasta_str:2,featur:0,fed:1,feed:2,field:2,file:[1,2,3],filesystem:2,fill:2,filter:2,filter_mol_typ:2,filtered_atom:2,final_primit:2,find:[0,1,2],find_atoms_within_dist:2,find_covalent_bond:2,find_foot:[1,2],find_foot_on_plan:2,find_limit:2,find_transform:2,finger:2,first:[0,1,2],first_ca:1,fit:2,fix:2,flag:[1,2],flat:2,flat_list_to_dummy_chain:2,flat_list_to_polym:2,flip:2,flip_reference_axis_if_antiparallel:2,fold:2,folder:[0,4],follow:[1,2],foot:2,footer:2,forc:2,force_add:2,form:[1,2],format:2,found:2,four:2,frame:2,framework:[1,3],from:[0,1,2,3],from_coordin:2,further:2,furthermor:4,futur:0,gauch:1,gen_sector:2,gen_stat:2,gener:[0,1,2],generalis:2,generate_bond_subgraphs_from_break:2,generate_covalent_bond_graph:2,geomalgorithm:2,geometr:[1,2],geometri:[3,5],get:[1,2],get_aa_cod:2,get_aa_info:2,get_aa_lett:2,get_atom:[1,2],get_coord:2,get_ligand:[0,1,2],get_monom:[1,2],get_reference_coord:2,get_slice_from_res_id:2,give:2,given:[1,2],global_set:2,glu:1,glucos:2,gly:1,glycin:2,granular:2,graph:2,great:2,group:2,h_glc:2,hand:2,handed:2,handl:1,has:[0,1,2],have:[0,1,2,4],head:2,header:2,height:2,heiner:2,helic:2,helicalcurv:2,helix:2,help:2,here:2,hetatm:2,hetero:2,hierarch:0,hierarchi:2,higher:2,histidin:1,hoh:1,hold:2,hopefulli:0,how:[0,1,2],howev:2,html:2,http:2,huang:2,hydrogen:2,hydrogenbond:2,hydrophob:2,id_dict:0,idea:2,ideal:2,ideal_backbone_bond_angl:2,ideal_backbone_bond_length:2,identifi:[0,2],ignor:1,ignore_end:2,imaginari:2,implement:[0,2],inc_alt_st:2,inc_ligand:2,includ:[0,1,2],increas:2,increment:2,index:[2,3],indexerror:2,indic:2,individu:0,infinit:2,inform:2,inherit:2,initialis:2,input:[0,1,2],insert:2,insertion_cod:2,insid:[0,1],instal:3,instanci:2,instanti:2,instead:2,intend:[0,2],interact:5,interest:2,interfac:2,intersect:2,intersection_start_and_end:2,introduct:3,intuit:[0,3],involv:2,ioerror:2,ion:1,ipython:0,is_acut:2,is_hetero:2,is_rot:2,is_within:[1,2],isambard:[0,2],isinst:0,isn:0,isoelectr:2,isoelectric_point:[0,2],item:[0,2],iter:[1,2],itertool:[1,2],its:[0,1,2],itself:[0,1],join:2,json:2,jupyt:0,just:[0,1,2],kdidtlisnn:0,kdidtlisnnalwskmlveedpgffeklaqaqkprflwigcsdsrvpaerltglepgelfvhrnvanlvihtdlnclsvvqyavdvlevehiiicghsgcggikaavenpelglinnwllhirdiwlkhssllgkmpeeqrldalyelnvmeqvynlghstimqsawkrgqnvtihgwaysindgllrdldvtatnretlengyhkgisalslkyi:0,keep:0,kei:2,keyerror:0,kind:[1,2],know:1,known:[1,2],label:2,lagrange_multipli:2,lagrangian:2,lagrangian_lambda:2,lambda:2,langrangian:2,larg:1,last:0,later:2,lead:0,least:2,len:2,length:2,less:2,let:1,letter:2,leu:[0,1],leucin:1,level:[0,2],levitt:2,lib:0,lie:2,lies:2,lig:1,ligand:[1,3,5],ligandgroup:2,like:[0,1,2],line:2,linedistance3:2,link:1,linux:4,list:[0,1,2],load:[0,1,2],load_pdb:[0,1,2],local:2,locat:2,longer:2,look:[0,1,2],loop:1,lost:2,lot:[0,1],low:1,lying:2,mac:4,made:0,magnitud:2,main:[0,2],maintain:2,make:[0,1,2,4],make_amp:2,make_pdb:2,make_primit:2,make_primitive_extrapolate_end:2,make_primitive_smooth:2,malformedpdbwarn:2,mani:[1,2],manual:2,mass:2,mass_weight:2,match:2,math:2,mathworld:2,matrix:2,max_rang:2,maximum:2,mean:[0,2],measur:[1,2],measure_sidechain_torsion_angl:2,measure_torsion_angl:2,member:2,memori:1,met:1,metadata:2,method:[0,1,2],middl:2,midpoint:2,might:1,min_dist:2,minim:2,minimal_distance_between_lin:2,minimum:2,minimun:2,mobil:2,mobile_i:2,mode:2,model:[0,2],modifi:2,modul:[0,3,5],mol:[1,2],mol_cod:[1,2],mol_codes_1:1,mol_codes_2:1,mol_typ:2,molar:2,molar_extinction_280:[0,2],molecul:[1,2],molecular:2,molecular_weight:[0,2],molecule_typ:2,mon_cl:2,monoer:2,monom:[0,1,2,3],monomer_data:2,monomer_id:2,monomer_info:2,more:[0,1,2],most:[0,1],move:2,much:1,multi:2,multipl:2,multipli:2,must:2,my_atom_a23ca:0,my_chain_a:0,my_ligand:[0,1],my_ligand_zinc:0,my_protein:0,my_protein_3qy1:1,my_residue_a23:0,n_ca:2,n_ca_c:2,n_join:2,n_point:2,name:2,nativ:2,natur:0,navig:4,nd2:1,ne2:1,nearby_residu:2,need:[0,1,4],neg:2,network:2,networkx:2,new_label:2,next:0,nitrogen:[0,1],nmr:2,non:[0,2],noncanonicalwarn:2,noncovalentinteract:2,none:[0,2],norm:2,normal:2,normalis:2,note:[1,2],notebook:0,noth:1,notimplementederror:2,notparameterisedwarn:2,now:1,nucleic:2,nucleic_acid:5,nucleotid:2,number:[0,2],numer:2,numpi:[1,2],o_c_n_angl:2,object:[1,2,3],occup:2,occur:1,od1:[1,2],od2:1,oe1:1,off:2,offset:2,oligo:2,oligomer:2,omega:[1,2],onc:0,one:[0,1,2],onli:[0,1,2],onto:2,oper:[1,2],oppos:2,option:2,order:[0,2],ordereddict:[0,1,2],ordin:2,org:2,orient:2,origin:[0,1,2],oscul:2,other:[0,1,2],otherwis:2,our:[1,2],out:1,output:2,over:[1,2],overlap:2,own:0,oxygen:[0,1],packag:[0,3,5],page:[2,3],pair:2,pairwis:2,parallel:2,paramet:2,parameteris:2,parent:[1,2,3],pares:2,pars:[0,2],parse_pdb_fil:2,parser:2,part:[0,2],partial:2,partial_charg:2,particular:2,partner:1,pass:2,path:[0,2],pdb:[1,2,3],pdb_id:2,pdb_line:2,pdb_parse_tre:2,pdb_parser:5,pdb_str:2,pdbe:2,pdbid:2,pdbparser:2,peptid:[1,2],per:2,perform:[0,1,2],perpendicular:2,phi:[1,2],pip:4,pitch:2,pitch_and_radiu:2,pitchloc:2,plai:0,plane:2,pleas:[0,1],plu:2,png:2,point2:2,point:[1,2],point_1:2,point_2:2,points1:2,points2:2,points_on_a_circl:2,polar:2,polym:[0,1,2,3],polymer_id:2,polymer_to_reference_axis_dist:2,polynucleotid:2,polypeptid:[0,1,2],polypeptide_vector:2,popul:2,posit:2,possibl:[0,2],potenti:1,preced:2,present:[0,2],preserv:2,press:0,prim_assembl:2,primari:2,primit:2,primitv:2,principl:2,prinicip:2,print:1,pro:0,probabl:1,problem:2,proc_atom:2,proc_chain:2,proc_funct:2,proc_line_coordin:2,proc_monom:2,proc_stat:2,process:2,produc:[0,1,2],product:2,program:2,proper:1,properti:0,protein:[0,1,5],provid:2,pseudo:2,pseudo_atom:5,pseudo_group:2,pseudoatom:2,pseudogroup:2,pseudomonom:2,psi:[1,2],psuedoatom:2,psuedomonom:2,python3:0,python:[0,1,3],quaternion:2,question:2,quit:1,radian:2,radii_of_curvatur:2,radiu:2,radius_of_circumcircl:[1,2],radius_of_curvatur:2,rais:[0,2],rang:[1,2],rather:2,read:2,real:2,real_and_vector:2,recent:0,recogn:2,recommend:2,record:2,reduc:0,ref:2,ref_axi:2,ref_coord:2,refer:[2,3],reference_atom:2,reference_axi:2,reference_axis_from_chain:2,reference_axis_nam:2,reflect:0,regardless:2,rel:[1,2],relabel:2,relabel_al:2,relabel_atom:2,relabel_monom:2,relabel_polym:2,relat:[1,2],relev:[1,2],rememb:0,remov:2,repeatedli:1,repositori:4,repres:[0,2,3],requir:[1,2],res_label:2,residu:[2,3],residues_close_to_zinc:1,residues_close_to_zinc_2:1,residues_per_turn:2,respect:2,retain:[0,2],retriev:2,revers:2,right:2,right_hand_rule_cross_product:2,rise:2,rise_per_residu:2,rloc:2,rmsd:2,rna:0,rotat:2,rotate_vector:2,rotation_matrix:2,row:2,rpt:2,rubric:2,rule:2,run:2,runtimewarn:2,s_primit:2,same:[0,1,2],scalabl:0,schirmer:2,schulz:2,score:2,scrape:2,scroll:1,search:2,second:2,section:[0,1,2],sector:2,see:[0,1,2],segment:2,select:[2,3],self:[0,2],sent:2,separ:2,seq:2,sequenc:[0,1,2],sequence_charg:2,sequence_isoelectric_point:2,sequence_molar_extinction_280:2,sequence_molecular_weight:2,ser:1,set:2,shape:2,shorten:2,shorter:2,shortest:2,should:2,show:1,side:2,side_chain:2,side_chain_atom:2,sidechain:2,simpl:[0,1,2,3],sinc:[0,2],singl:[1,2],site:[0,2],size:2,skew_lin:2,slice_polym:2,slightli:1,smaller:2,smooth:2,smoother:2,smoothing_level:2,solut:2,solv:2,solvent:2,some:[0,1],sometim:1,sort:2,sort_by_tag:2,sourc:[1,2,3],space:2,special:[0,2],special_frenet_vectors_and_generalized_curvatur:2,specif:[0,1,2],specifi:2,spheric:2,spherical_coordinate_system:2,spherical_to_cartesian:2,sphericalcoordin:2,split:2,springer:2,squar:[0,2],stackexchang:2,stand:[0,3],standard:0,start:[1,2],start_index:2,state:[1,2],state_data:2,state_id:2,stop:2,store:[0,2],str:[0,2],straight:2,string:[0,1,2],strip_stat:2,structur:[0,1,2,3],subbiah:2,subclass:2,subgraph:2,subject:2,submodul:5,substitut:2,success:2,sulfur:1,sulphur:1,summari:3,suppli:2,sure:[1,4],svg:2,swap:2,system:2,t_from_arc_length:2,t_ref:2,tab:0,tabl:2,tag:[1,2],tag_atoms_unique_id:2,tag_ca_geometri:2,tag_sidechain_dihedr:2,tag_torsion_angl:2,take:[0,1,2],taken:2,tangent:2,target:2,target_i:2,tell:2,ten:2,term:2,termin:2,terminu:2,test_func:2,text:2,than:2,the_biopython_structural_bioinformatics_faq:2,thei:[0,1,2],them:[1,2],themselv:1,therefor:2,thi:[0,1,2,4],think:2,third:2,though:2,thr:1,three:2,threshold:2,through:[0,1,2],thumb:2,tilt:2,time:2,tip:0,togeth:2,toler:2,too:[1,2],tool:[1,2,4],tools_geometri:2,torsion:[1,2],torsion_angl:2,total:2,traceback:0,trade:2,traingl:2,tran:1,transform:2,translat:2,travers:0,tree:2,triangl:2,tripl:2,trivial:2,trp:1,tupl:[1,2],turn:2,tutori:1,two:[0,1,2],type:[0,2,4],typeerror:2,u_in:2,unabl:2,under:2,underscor:2,understand:1,unequ:2,uniform:2,uniformli:2,uniqu:2,unique_id:2,unit:2,unit_binorm:2,unit_norm:2,unit_tang:2,unit_vect:2,unit_vector:[1,2],unk:2,unknown:2,unless:2,unnatur:0,updat:2,upload:2,upon:2,uppercas:2,use:[0,1,2],used:[1,2],useful:[0,1,2],user:2,uses:[2,4],using:[0,1,2],usual:2,v_out:2,val:1,valid_backbone_bond_angl:2,valid_backbone_bond_length:2,valu:[1,2],valueerror:2,variabl:0,variou:[0,2],vector:[1,2],verbos:2,veri:[1,2],verlag:2,version:[0,2],via:2,visual:4,wai:[0,1],want:[0,1,2],water:[1,2],weight:2,welcom:3,well:[0,1,2],were:2,what:1,when:[1,2],where:2,which:[0,1,2,4],whichev:1,whitespac:2,why:0,wiki:2,wikimedia:2,wikipedia:2,wind:2,window_length:2,within:[2,3],without:0,wolfram:2,work:[0,2],would:2,write:2,write_pdb:2,wrt:2,www:2,yield:2,york:2,you:[0,1,2,4],your:[0,2],zenith:2,zero:2,zerodivisionerror:2,zinc:[0,1],zinc_1:1},titles:["An Introduction to the AMPAL Framework","Advanced Selections and Analysis","ampal package","AMPAL Documentation","Installation","ampal"],titleterms:{activ:[0,1],advanc:1,all:1,amino_acid:2,ampal:[0,1,2,3,5],ampal_warn:2,analys:1,analyse_protein:2,analysi:[0,1],assembl:2,atom:[0,1],base_amp:2,basic:[0,4],chain:0,composit:1,content:2,convert:0,data:2,distanc:1,document:3,file:0,framework:0,from:4,geometri:[1,2],indic:3,instal:4,interact:2,introduct:0,ligand:[0,2],modul:2,nucleic_acid:2,object:0,packag:2,parent:0,pdb:0,pdb_parser:2,protein:2,pseudo_atom:2,residu:[0,1],search:3,select:[0,1],sourc:4,submodul:2,summari:[0,1],within:1}})