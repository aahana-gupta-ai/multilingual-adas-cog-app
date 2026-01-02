import {integerRange} from '../common/validation.js';
export const definition={"id": "word-recall", "title": "Word recall", "max_observations": 10, "response_kind": "demonstration-observation-count"};
export function normalizeResponse(value){if(value===null||value===undefined||value==='')return null;return integerRange(Number(value),0,definition.max_observations);}
export function record(value){const count=normalizeResponse(value);return {task_id:definition.id,observation_count:count,status:count===null?'missing':'recorded',clinical_score:false};}
export default {...definition,normalizeResponse,record};
